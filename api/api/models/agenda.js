'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    static associate(models) {
      // Associações podem ser definidas aqui
    }
  };
  Agenda.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    dataHoraInicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dataHoraFinal: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Agenda',
    paranoid: true
  });
  return Agenda;
};
