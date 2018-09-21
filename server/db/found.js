const db = require('./connection')

function createFound (species, photo, user_id) {
  return db('found')
        .insert({species, photo, user_id})
        .catch(err => reject(err))
    }

function getFoundDB(){
    return db('found').select()
    }


module.exports = {
    createFound,
    getFoundDB
}
