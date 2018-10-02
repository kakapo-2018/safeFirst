var router = require('express').Router()
const db = require('../db/dbdashboard')

router.post('/hazards', (req, res) => {
    let data = req.body
    db.postHazard(data)
    .then(hazards => {
        res.json(hazards)
    })
})

module.exports = router

