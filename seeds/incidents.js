exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('incidents').del()
      .then(function () {
        // Inserts seed entries
        return knex('incidents').insert(
        [
          {
            user_id: '4',
            person_involved: 'user6',
            incident_type: 'Near miss',
            date_time: '2018-09-12 15:45',
            task: 'Logging',
            other_task: '',
            incident: '',
            other_incident: 'Almost got hit by moving object',
            location: 'Muruparu forest block 9',
            first_aid: 'false'
          },
          {
            user_id: '5',
            person_involved: 'user5',
            incident_type: 'Accident',
            date_time: '2018-09-22 10:45',
            task: 'Pruning',
            other_task: '',
            incident: 'Hit by truck',
            other_incident: '',
            location: 'Rotorua forest block 10',
            first_aid: 'false'
          },
          {
            user_id: '3',
            person_involved: 'user4',
            incident_type: 'Injury',
            date_time: '2018-09-24 15:55',
            task: 'Planting',
            other_task: '',
            incident: 'Lifting',
            other_incident: '',
            location: 'Optiki',
            first_aid: 'true'
          },
          {
            user_id: '3',
            person_involved: 'user3',
            incident_type: 'Near miss',
            date_time: '2018-08-12 09:45',
            task: '',
            other_task: 'Making coffee',
            incident: 'Spill',
            other_incident: '',
            location: 'Staff room, head office',
            first_aid: 'false'
          },
          {
            user_id: '2',
            person_involved: 'user2',
            incident_type: 'Accident',
            date_time: '2018-09-21 17:45',
            task: 'Pruning',
            other_task: '',
            incident: 'Cut',
            other_incident: '',
            location: 'Forest Uruwera',
            first_aid: 'true'
          },
          {
            user_id: '2',
            person_involved: 'user1',
            incident_type: 'Injury',
            date_time: '2018-09-18 01:15',
            task: 'Planting',
            other_task: '',
            incident: '',
            other_incident: 'Sprained ankle',
            location: 'Palmerston North',
            first_aid: 'true'
          }
        ]);
      });
  };