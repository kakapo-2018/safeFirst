exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('industries').del()
      .then(function () {
        // Inserts seed entries
        return knex('industries').insert(
        [
          {
            id: 1, 
            industry: 'Utility'
          },
          {
            id: 2, 
            industry: 'Forestry'
          },
          {
            id: 3, 
            industry: 'Postal / Courier Services'
          },
          {
            id: 4, 
            industry: 'Education'
          }
        ]);
      });
  };