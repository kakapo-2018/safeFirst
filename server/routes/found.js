var router = require('express').Router()

var {animalFound, foundExists, createFound} = require('../db/found')

router.post('/', postFound)

function postFound (req, res, next) {
  const species = req.body.species
  const photo = req.body.photo
  const user_id = req.body.user_id

  const newLost = {species, photo, user_id}
//   console.log(newLost)

    createFound (species, photo)
        .then(() => {
            console.log('then then then');
            next()
        })
        .catch(err => {
          res.status(500).send({message: "Server Error in found exist"})
        })
    // })
    .catch(err => res.status(500).send({message: "Server Error full catch"}))
}

getFound = (req, res, next) => {
    const id = req.body.id
    const species = req.body.species
    const photo = req.body.photo
    const user_id = req.body.user_id

  const newLost = {species, photo, user_id}
    animalFound(id)
    .then(exists => {
      if (exists) return res.json(newLost)
      .then(() => next())
        .catch(err => {
          res.status(500).send({message: "Server Error"})
        })
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.get('/', getFound)

module.exports = router