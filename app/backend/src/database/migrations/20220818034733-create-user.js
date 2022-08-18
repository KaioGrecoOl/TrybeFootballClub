'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncement: true,
      },
      username: {
        type: Sequelize.STING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
