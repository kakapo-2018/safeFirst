var router = require('express').Router()
const db = require('../db/dbhsmeetinglist')


router.get('/', (req, res) => {
    db.getMinutes()
    .then(minutes => {
        res.json(minutes)
    })
})

// router.post('/hazard', (req, res) => {
//     let data = req.body
//     db.postHazard(data)
//     .then(hazards => {
//         res.json(hazards)
//     })
// })

module.exports = router