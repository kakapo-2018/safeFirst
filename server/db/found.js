const db = require('./connection')

function createFound (species, photo) {
  return db('found')
        .insert({species, photo})
        .catch(err => reject(err))
    }

function getFoundDB(){
    return db('found').select()
    }


module.exports = {
    createFound,
    getFoundDB
}
