const db = require('./connection')

function createFound (species, photo) {
    console.log('hello createFound', species, photo)
  return db('found')
        .insert({species, photo})
        // .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    }

function animalFound(){
    console.log('get-get-get')
    return db('found')
    }

// function getFound (photos) {
//   return db('found')
//     .where('photos', photos)
//     .first()
// }

// function foundExists (photos) {
//       return db('found')
//         .where('photos', photos)
//         .first()
//     }

module.exports = {
    createFound,
    animalFound,
    // foundExists
}
