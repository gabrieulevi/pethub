'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendimento extends Model {
    static associate(models) {
      Atendimento.belongsToMany(models.Servico, {
        through: 'AtendimentoServico',
        foreignKey: 'atendimentoId',
        as: 'servicos'
      });
    }
  }
  Atendimento.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dataHoraInicio: DataTypes.DATE,
    dataHoraFinal: DataTypes.DATE,
    preco: DataTypes.DECIMAL(10, 2), // Altere conforme necessário
  }, {
    sequelize,
    modelName: 'Atendimento',
    paranoid: true
  });
  return Atendimento;
};
