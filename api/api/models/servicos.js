'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    static associate(models) {
      // Nenhuma associação necessária aqui
    }
  }
  Servico.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    preco: DataTypes.DECIMAL(10, 2), // Altere conforme necessário
  }, {
    sequelize,
    modelName: 'Servico',
    paranoid: true
  });
  return Servico;
};
