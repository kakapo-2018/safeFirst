var router = require('express').Router()
const db = require('../db/dbhsmeeting')

router.get('/', (req,res) => {
    db.getHazards()
    .then(hazards => {
        res.json(hazards)
    })
})

module.exports = router