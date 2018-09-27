var router = require('express').Router()
const db = require('../db/dbincidents')

router.get('/', (req,res) => {
    db.getIncidents()
    .then(incidents => {
        res.json(incidents)
    })
})

module.exports = router