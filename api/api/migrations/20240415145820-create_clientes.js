'use strict';

const { sequelize } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(255), // Definindo o tamanho máximo do campo nome
        allowNull: false // Garantindo que o campo nome não pode ser nulo
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true // Definindo um valor padrão para o campo ativo
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // Garantindo que o campo email não pode ser nulo
        unique: true // Definindo o campo email como único
      },
      role: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING(20) // Definindo o tamanho máximo do campo telefone
      },
      data_de_cadastro: {
        type: Sequelize.DATE, // Usando DATE para armazenar data e hora
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Definindo o valor padrão como a data e hora atuais
      },
      data_de_nascimento: {
        type: Sequelize.DATEONLY // Usando DATEONLY para armazenar apenas a data
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};
