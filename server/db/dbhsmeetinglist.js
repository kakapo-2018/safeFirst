const connection = require('./connection');

function getMinutes(testDB) {
    const db = testDB || connection
    return db('meetings')
    
}

// function postHazard(newHazard, testDB){
//     const db = testDB || connection
//     return db('hazards')
//     .insert(newHazard)
// }

module.exports = {
    getMinutes, 
   // postHazard
}