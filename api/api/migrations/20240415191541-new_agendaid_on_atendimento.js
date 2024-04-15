'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Atendimentos', 'agendaId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Agenda',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Atendimentos', 'agendaId');
  }
};
