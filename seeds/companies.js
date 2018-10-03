exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companies').del()
      .then(function () {
        // Inserts seed entries
        return knex('companies').insert(
        [
          {
            company: 'Genesis Energy'
          },
          {
            company: 'Balco Logging'
          },
          {
            company: 'New Zealand Post'
          },
          {
            company: 'Enspiral'
          }
        ]);
      });
  };