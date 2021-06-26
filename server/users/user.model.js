const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.TEXT, allowNull: false },
        lastName: { type: DataTypes.TEXT, allowNull: false },
        username: { type: DataTypes.TEXT, allowNull: false },
        hash: { type: DataTypes.TEXT, allowNull: false },
        ca_activity: {type: DataTypes.TEXT, allowNull: true},
        ca_award: {type: DataTypes.TEXT, allowNull: true}
    };
    
    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}