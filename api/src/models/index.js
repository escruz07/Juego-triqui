'use strict';
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT} = process.env;

let sequelize = new Sequelize(
  {
    database: DB_DATABASE,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    native: false,
});

const modelDefiners = [];

fs
  .readdirSync(path.join(__dirname, '/'))
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, '/', file)));
  });

modelDefiners.forEach(modelName => modelName(sequelize)); 

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};