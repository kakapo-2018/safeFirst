const {hashSync} = require('bcrypt')
const saltRounds = 10

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'user1',
          email_address: 'user1@devacademy.co.nz',
          contact_details: 'Ring the bell ;)',
          hash: hashSync('user1', saltRounds)
        },
        {
          id: 2,
          user_name: 'user2',
          email_address: 'user2@devacademy.co.nz',
          contact_details: 'Call',
          hash: hashSync('user2', saltRounds)
        },
        {
          id: 3,
          user_name: 'user3',
          email_address: 'user3@gmail.com',
          contact_details: 'Hope',
          hash: hashSync('user3', saltRounds)
        },
        {
          id: 4,
          user_name: 'user4',
          email_address: 'user4@devacademy.co.nz',
          contact_details: 'Call',
          hash: hashSync('user4', saltRounds)
        },
        {
          id: 5,
          user_name: 'user5',
          email_address: 'user5@devacademy.co.nz',
          contact_details: 'Call',
          hash: hashSync('user5', saltRounds)
        }
      ]);
    });
};
