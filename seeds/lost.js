
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('lost').del()
    .then(function () {
      // Inserts seed entries
      return knex('lost').insert([
        {
          id: 1,
          name: 'Rodger',
          species: 'Cat',
          photo: 'https://picsum.photos/200/300',
          user_id: '1',
        },
        {
          id: 2,
          name: 'Topsy',
          species: 'Dog',
          photo: 'https://picsum.photos/100/200',
          user_id: '2',
        },
        {
          id: 3,
          name: 'Raster',
          species: 'Hedgehog',
          photo: 'https://picsum.photos/60/30',
          user_id: '3',
        }
      ]);
    });
};
