exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companies').del()
      .then(function () {
        // Inserts seed entries
        return knex('companies').insert(
        [
          {
            id: 1, 
            company: 'Genesis Energy'
          },
          {
            id: 2, 
            company: 'Balco Logging'
          },
          {
            id: 3, 
            company: 'New Zealand Post'
          },
          {
            id: 4, 
            company: 'Enspiral'
          }
        ]);
      });
  };