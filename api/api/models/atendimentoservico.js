'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtendimentoServico extends Model {
    static associate(models) {
      // Nenhuma associação necessária aqui
    }
  }
  AtendimentoServico.init({
    atendimentoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Atendimento',
        key: 'id'
      }
    },
    servicoId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Servico',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AtendimentoServico',
    paranoid: true
  });
  return AtendimentoServico;
};
