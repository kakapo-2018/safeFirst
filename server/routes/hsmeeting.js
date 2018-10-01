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
    delete data.Date
    db.postHazard(data)
    .then(hazards => {
        res.json(hazards)
    })
})

module.exports = router

