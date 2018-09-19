const db = require('./connection')

function createFound (species, photos) {
  return db('found')
        .insert({species, photos})
        .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    })
}


// function getFound (photos) {
//   return db('found')
//     .where('photos', photos)
//     .first()
// }

// function foundExists (user_name) {
//     return db('users')
//       .where('user_name', user_name)
//       .first()
//   }

module.exports = {

}
