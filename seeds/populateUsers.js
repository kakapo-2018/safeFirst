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
          user_name: 'symesharr',
          email_address: 'harrison@devacademy.co.nz',
          contact_details: 'Ring the bell ;)',
          hash: hashSync('bob', saltRounds)
        },
        {
          id: 2,
          user_name: 'bob',
          email_address: 'bob@devacademy.co.nz',
          contact_details: 'Call',
          hash: hashSync('krunk', saltRounds)
        },
        {
          id: 3,
          user_name: 'maurice',
          email_address: 'maurice@gmail.com',
          contact_details: 'Hope',
          hash: hashSync('123', saltRounds)
        }
      ]);
    });
};
