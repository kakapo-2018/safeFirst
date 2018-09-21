var router = require('express').Router()

var {getFoundDB, createFound} = require('../db/found')

router.post('/', postFound)

function postFound (req, res, next) {
  const species = req.body.species
  const photo = req.body.photo
  const user_id = req.body.user_id

  //const newLost = {species, photo, user_id}
    createFound (species, photo, user_id)
        .then(() => next())
        .catch(err => {
          res.status(500).send({message: "Server Error in found exist"})
        })
    .catch(err => res.status(500).send({message: "Server Error full catch"}))
}


getFound = (req, res, next) => {
    getFoundDB()
    .then(animal => {
        res.json(animal)
    })
    .catch(err => res.status(500).send({message: "Server Error 2"}))
}

router.get('/', getFound)

module.exports = router