'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      email: { type: Sequelize.STRING, unique: true },
      password: Sequelize.STRING,
      role: Sequelize.ENUM('volunteer','organization'),
      skills: Sequelize.JSON,
      location: Sequelize.JSON,
      availability: Sequelize.JSON,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
    await queryInterface.createTable('Organizations', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      contactEmail: Sequelize.STRING,
      location: Sequelize.JSON,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
    await queryInterface.createTable('Opportunities', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      skills: Sequelize.JSON,
      location: Sequelize.JSON,
      schedule: Sequelize.JSON,
      organizationId: Sequelize.INTEGER,
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
    await queryInterface.createTable('Applications', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      userId: Sequelize.INTEGER,
      opportunityId: Sequelize.INTEGER,
      status: { type: Sequelize.ENUM('pending','accepted','rejected'), defaultValue: 'pending' },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applications');
    await queryInterface.dropTable('Opportunities');
    await queryInterface.dropTable('Organizations');
    await queryInterface.dropTable('Users');
  }
};
