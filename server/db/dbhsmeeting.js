const connection = require('./connection');

function getHazards(testDB) {
    const db = testDB || connection
    return db('hazards')
    .where('daily', '=', 'false')
}

module.exports = {
    getHazards
}