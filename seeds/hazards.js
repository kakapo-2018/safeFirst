exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('hazards').del()
      .then(function () {
        // Inserts seed entries
        return knex('hazards').insert(
        [
          {
            id: 1, 
            hazard: 'Sunburn',
            risk: 'We are working through summer, there is a risk of sunburn',
            control: 'Wear SPF50, hat, sunglasses and long sleeve clothing if needed',
            daily: 'false',
          },
          {
            id: 2, 
            hazard: 'Lose items on ground',
            risk: 'Slipping or falling',
            control: 'Everyone is responsible to keep the floor tidy with no lose items floating aorund',
            daily: 'true',
          },
          {
            id: 3, 
            hazard: 'Working on ladders',
            risk: 'Falling of the ladder',
            control: 'Work in pairs with one person on the ground responsible for ladder safety',
            daily: 'true',
          },
          {
            id: 4, 
            hazard: 'Working near road',
            risk: 'Being run over by a vehicle',
            control: 'Setting up a traffic management plan and reminding everyone on a daily basis to act responsibly around traffic',
            daily: 'false',
          },
          {
            id: 5, 
            hazard: 'Heavy objects',
            risk: 'We are working with heavy objects, lifting these could cause injury',
            control: 'Objects over 30 kilos to be lifted by multiple people or with assistence of machinery',
            daily: 'true',
          },
          {
            id: 6, 
            hazard: 'Loud machines',
            risk: 'Working near loud machines could cause hearing damage',
            control: 'Wear ear protection at all times when in the vicinity of loud machines',
            daily: 'true',
          }
        ]);
      });
  };