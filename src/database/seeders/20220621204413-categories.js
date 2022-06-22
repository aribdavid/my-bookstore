module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Fantasy',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          name: 'Science Fiction',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          name: 'History',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          name: 'Literary Fiction',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },

      ],

      {},

    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
