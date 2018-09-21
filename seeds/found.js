exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('found').del()
      .then(function () {
        // Inserts seed entries
        return knex('found').insert([
            {
                species: 'dog',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6_vciktketOzivsqfDiULHwFo87ptR5JJtA8pbDBZDkcbnU',
                user_id: '1',
              },
              {
                species: 'cat',
                photo:'https://yt3.ggpht.com/a-/AN66SAwnPp08tm2g7r7b6OcFvB9KQLvSFIJYUwgyKw=s900-mo-c-c0xffffffff-rj-k-no',
                user_id: '2',
              },
              {
                species: 'dog',
                photo:'https://static01.nyt.com/images/2018/06/26/business/25ugileistdog-sub/merlin_140144286_193276f3-89e9-44a8-a828-51ec9ff5bc8e-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
                user_id: '2',
              },
              {
                species: 'cat',
                photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Egyptian_Mau_Bronze.jpg/1200px-Egyptian_Mau_Bronze.jpg',
                user_id: '3',
              }
        ])
    })
}