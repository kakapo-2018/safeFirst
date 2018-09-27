exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('meetings').del()
      .then(function () {
        // Inserts seed entries
        return knex('meetings').insert(
        [
          {
            id: 1, 
            date_time: '2018-09-06 10:45',
            location: '22 Cuba Street, Wellington',
            issues: 'The following issues were discussed: health and safety plan, incidents from the last month. This led to the following conclussions and actions points.....'
          },
          {
            id: 2, 
            date_time: '2018-09-13 10:45',
            location: '82 Willis Street, Wellington',
            issues: 'The following issues were discussed: health and safety plan, incidents from the last month. This led to the following conclussions and actions points.....'
          },
          {
            id: 3, 
            date_time: '2018-09-20 10:45',
            location: '42 Taranaki Street, Wellington',
            issues: 'The following issues were discussed: health and safety plan, incidents from the last month. This led to the following conclussions and actions points.....'
          },
          {
            id: 4, 
            date_time: '2018-09-27 10:45',
            location: '221 Victoria Street, Wellington',
            issues: 'The following issues were discussed: health and safety plan, incidents from the last month. This led to the following conclussions and actions points.....'
          },
        ]);
      });
  };