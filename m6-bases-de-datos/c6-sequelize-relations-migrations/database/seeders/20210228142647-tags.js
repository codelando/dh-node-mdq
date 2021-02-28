'use strict';
var faker = require('faker');

const buildTag = () => {
  return {
    name: faker.color
  }
}

const tags = [
  { name: 'tag1'},
  { name: 'tag2'},
  { name: 'tag3'},
  { name: 'tag4'},
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('tags', tags, {});  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tags', null, {});
  }
};
