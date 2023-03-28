module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Departments', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      department: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Departments');
  },
};