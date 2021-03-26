'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      { name: 'Categoría 1' },
      { name: 'Categoría 2' },
      { name: 'Categoría 3' },
      { name: 'Categoría 4' },
      { name: 'Categoría 5' },
      { name: 'Categoría 6' },
      { name: 'Categoría 7' },
      { name: 'Categoría 8' },
      { name: 'Categoría 9' },
      { name: 'Categoría 10' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
