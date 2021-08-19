const { Model, DataTypes } = require("sequelize");

class Address extends Model { // Criando model
    static init(connection) { // Vamos passar essa conexão quando chamarmos 
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: connection // Passando conexão pro sequelize
        });
    };

};

module.exports = User;