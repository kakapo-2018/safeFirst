const {hashSync} = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_name: 'Cameron',
          email_address: 'user1@devacademy.co.nz',
          contact_details: '0210538976',
          hash: hashSync('password', saltRounds),
          company_id: '1',
          industry_id: '1'
        },
        {
          user_name: 'Robert',
          email_address: 'user2@devacademy.co.nz',
          contact_details: '022595997',
          hash: hashSync('password', saltRounds),
          company_id: '2',
          industry_id: '2'
        },
        {
          user_name: 'Richard',
          email_address: 'user3@gmail.com',
          contact_details: '0225979959',
          hash: hashSync('password', saltRounds),
          company_id: '3',
          industry_id: '3'
        },
        {
          user_name: 'user4',
          email_address: 'user4@devacademy.co.nz',
          contact_details: '0215995959',
          hash: hashSync('user4', saltRounds),
          company_id: '2',
          industry_id: '2'
        },
        {
          user_name: 'user5',
          email_address: 'user5@devacademy.co.nz',
          contact_details: '022595998',
          hash: hashSync('user5', saltRounds),
          company_id: '1',
          industry_id: '1'
        }
      ]);
    });
};
