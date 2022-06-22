module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Authors',
      [
        {
          firstName: 'J.R.R',
          lastName: 'Tolkien',
          dateOfBirth: '01/03/1973',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Isaac',
          lastName: 'Asimov',
          dateOfBirth: '01/02/1920',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Gabriel',
          lastName: 'García Márquez',
          dateOfBirth: '03/06/1927',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Eric',
          lastName: 'Hobsbawn',
          dateOfBirth: '06/09/1917',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Fiódor',
          lastName: 'Dostoiévski',
          dateOfBirth: '11/11/1821',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },

      ],

      {},

    );
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Authors', null, {});
  },
};
