const { Model, DataTypes } = require("sequelize");

class User extends Model { // Criando model
    static init(connection) { // Vamos passar essa conexão quando chamarmos 
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection // Passando conexão pro sequelize
        });
    };
};

module.exports = User;