const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create the database if doesn't  exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // database connection
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // add models to db obj
    db.User = require('../users/user.model')(sequelize);

    // database sync
    await sequelize.sync();
}