var router = require('express').Router()

var {foundExists, getFound, createFound} = require('../db/found')

router.post('/found', postFound)

function postFound (req, res, next) {
  const {species, photos} = req.body
  foundExists(photos)
    .then(exists => {
      if (exists) return res.status(400).send({message: "This animal already has a found page"})
      createFound (species, photos)
        .then(() => next())
        .catch(err => {
          res.status(500).send({message: "Server Error"})
        })
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}



module.exports = router