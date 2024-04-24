'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [
      {
        nome: "Marisa monte",
        email: "marisamonte@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-05-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      },
      {
        nome: "Julio Nagaita",
        email: "julionagaita@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-04-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      },
      {
        nome: "Abisha Rada",
        email: "abisharada@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-03-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      },
      {
        nome: "Nuvo Carl",
        email: "nuvocarl@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-02-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      },
      {
        nome: "Kan Tando",
        email: "kantando@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-01-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      },
      {
        nome: "Roque Hul Ral",
        email: "roquehulral@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-07-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      },
      {
        nome: "Coco Rico",
        email: "cocorico@gmail.com",
        telefone: "74991103182",
        data_de_nascimento: "2005-06-20",
        createdAt: "2024-01-25",
        updatedAt: "2024-01-25",
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
