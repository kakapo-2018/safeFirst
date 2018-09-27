exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('meetings').del()
      .then(function () {
        // Inserts seed entries
        return knex('meetings').insert(
        [
          {
            id: 1, 
            date_time: '2018-09-06 10:45'
          },
          {
            id: 2, 
            date_time: '2018-09-13 10:45'
          },
          {
            id: 3, 
            date_time: '2018-09-20 10:45'
          },
          {
            id: 4, 
            date_time: '2018-09-27 10:45'
          },
        ]);
      });
  };