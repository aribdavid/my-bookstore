'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'User',
      [
        {
          firstName: 'Avraham',
          lastName: 'Avinu ',
          password: '123456',
          email: 'leo@test.com',
          address: 'Fools street, 10',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Itzhak',
          lastName: 'ben Avraham ',
          password: '123456',
          email: 'leo@test.com',
          address: 'Fools street, 10',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Yaakov',
          lastName: 'ben Itzhak ',
          password: '123456',
          email: 'leo@test.com',
          address: 'Fools street, 10',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Yosef',
          lastName: 'ben Yaakov ',
          password: '123456',
          email: 'leo@test.com',
          address: 'Fools street, 10',
  
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          firstName: 'Moshe',
          lastName: 'Abeinu ',
          password: '123456',
          email: 'leo@test.com',
          address: 'Fools street, 10',
  
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, 
        {
          firstName: 'David HaMelech',
          lastName: 'ben Father ',
          password: '123456',
          email: 'leo@test.com',
          address: 'Fools street, 10',
  
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
  
      ],

      {},

    )  
  },

  async down (queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
