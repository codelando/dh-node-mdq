'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tags', 'name', { 
      type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('tags', 'name');
  }
};
