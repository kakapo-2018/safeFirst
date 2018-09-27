const connection = require('./connection');

function getHazards(testDB) {
    const db = testDB || connection
    return db('hazards')
    .where('daily', '=', 'true')
}

function postHazard(newHazard, testDB){
    const db = testDB || connection
    return db('hazards')
    .insert(newHazard)
}

module.exports = {
    getHazards,
    postHazard
}