'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define a associação entre Pet e Cliente
      Pet.belongsTo(models.Cliente, {
        foreignKey: 'donoId',
        as: 'dono'
      });
    }
  };
  Pet.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: DataTypes.STRING,
    dataDeNascimento: DataTypes.DATEONLY,
    especie: DataTypes.STRING,
    raca: DataTypes.STRING,
    observacoes: DataTypes.TEXT
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Pet',
  });
  return Pet;
};
