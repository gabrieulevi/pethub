'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associações podem ser definidas aqui
      Cliente.hasMany(models.Pet, {
        foreignKey: 'cliente_id'
      });
      
    }
  }
  Cliente.init({
    nome: DataTypes.STRING(255),  // Define o tamanho máximo do campo nome
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado tipo email inválido'
        }
      }
    },
    role: DataTypes.STRING,
    telefone: DataTypes.STRING(20),  // Adicionando campo telefone
    data_de_cadastro: {
      type: DataTypes.DATE,  // Usa DATE para armazenar data e hora
      defaultValue: DataTypes.NOW  // Define o valor padrão como a data e hora atuais
    },
    data_de_nascimento: DataTypes.DATEONLY  // Usado para armazenar apenas a data
  }, {
    sequelize,
    modelName: 'Cliente',
    paranoid: true,  // Habilita o uso de "soft deletes"
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: {
        where: {}
      }
    }
  });
  return Cliente;
};
