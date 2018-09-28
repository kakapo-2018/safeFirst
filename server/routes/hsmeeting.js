var router = require('express').Router()
const db = require('../db/dbhsmeeting')


router.get('/', (req, res) => {
    db.getHazards()
    .then(hazards => {
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

module.exports = router

