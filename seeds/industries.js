exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('industries').del()
      .then(function () {
        // Inserts seed entries
        return knex('industries').insert(
        [
          {
            industry: 'Utility'
          },
          {
            industry: 'Forestry'
          },
          {
            industry: 'Postal / Courier Services'
          },
          {
            industry: 'Education'
          }
        ]);
      });
  };