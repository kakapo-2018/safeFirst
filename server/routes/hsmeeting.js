var router = require('express').Router()
const db = require('../db/dbhsmeeting')


router.get('/', (req, res) => {
    console.log('here')
    db.getHazards()
    .then(hazards => {
        console.log(hazards)
        res.json(hazards)
    })
})

router.post('/hazard', (req, res) => {
    let data = req.body
    db.postHazard(data)
    .then(hazards => {
        res.json(hazards)
    })
})


router.post('/minute', (req, res) => {
    let data = req.body
    db.postMinute(data)
    .then(minutes => {
        res.json(minutes)
    })
})

module.exports = router

