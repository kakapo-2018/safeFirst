const connection = require('./connection');

function getIncidents(testDB) {
    const db = testDB || connection
    return db('incidents')    
}

module.exports = {
    getIncidents
}
