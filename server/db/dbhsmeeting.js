const connection = require('./connection');

function getHazards(testDB) {
    const db = testDB || connection
    return db('hazards')
    .where('daily', '=', 'false')
}

function postHazard(newHazard, testDB){
    const db = testDB || connection
    return db('hazards')
    .insert(newHazard)
}

function postMinute(newMinutes, testDB){
    const db = testDB || connection
    return db('meetings')
    .insert(newMinutes)
}

module.exports = {
    getHazards, 
    postHazard,
    postMinute
}