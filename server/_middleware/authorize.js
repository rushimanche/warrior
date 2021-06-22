const jwt = require('express-jwt');
const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = authorize;

function authorize() {
    
    return [
        // auth JWT token
        jwt({ secret, algorithms: ['HS256'] }),

        async (req, res, next) => {
            // get user with id 
            console.log(req);
            const user = await db.User.findByPk(req.body.id);

            // check if user still exists
            if (!user)
                return res.status(401).json({ message: 'Unauthorized' });
                
            req.user = user.get();
            next();
        }
    ];
}