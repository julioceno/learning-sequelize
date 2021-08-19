'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { 

    await queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" }, // A chave estrangeira desta coluna é da tabela usuários da coluna id
        onUpdate: "CASCADE", // Se o id do usuário mudar na tabela users, o id do usuário em questão que tá nessa coluna também deverá mudar
        onDelete: "CASCADE", // Se caso o usuário for deletado da tabela users, esse registro aqui também deverá ser deletado
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
      
    }); // Criar tabela
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.dropTable('addresses'); // Dropar tabela
  }
};
