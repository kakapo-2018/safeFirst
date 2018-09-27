exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('hazards').del()
      .then(function () {
        // Inserts seed entries
        return knex('hazards').insert(
        [
          {
            id: 1, 
            user_id: '4',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: ''
          },
          {
            id: 2, 
            user_id: '5',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: ''
          },
          {
            id: 3, 
            user_id: '3',
            person_involved: '',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: ''
          },
          {
            id: 4, 
            user_id: '3',
            person_involved: '',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: ''
          },
          {
            id: 5, 
            user_id: '2',
            person_involved: '',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: ''
          },
          {
            id: 6, 
            user_id: '2',
            person_involved: '',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: ''
          }
        ]);
      });
  };