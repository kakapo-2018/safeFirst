const connection = require('./connection');

function getIncidents(testDB) {
    const db = testDB || connection
    return db('incidents')    
}

function postIncidents(newIncident, testDB) {
    const db = testDB || connection
    return db ('incidents')
    .insert(newIncident)
}

module.exports = {
    getIncidents,
    postIncidents
}
