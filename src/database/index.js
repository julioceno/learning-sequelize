const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Address = require("../models/Address");

const connection = new Sequelize(dbConfig);

// Criando conexão com o model
User.init(connection); 
Address.init(connection); 

module.exports = connection;