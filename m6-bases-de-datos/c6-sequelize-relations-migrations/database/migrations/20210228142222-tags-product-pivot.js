'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('products_tags', { 
       product_id: {
         type: Sequelize.INTEGER,
         references: {
           model: 'products',
           key: 'id'
         }
       },
       tag_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tags',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products_tags');
  }
};
