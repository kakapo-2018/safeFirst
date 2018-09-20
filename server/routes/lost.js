var router = require('express').Router()

router.post('/', lostRoute)
router.get('/', getLostAnimalsRoute)

// var createLostAnimal = require('../db/lostAnimals')
// var getLostAnimals = require('../db/lostAnimals')

var { createLostAnimal, getLostAnimals } = require('../db/lostAnimals')


function lostRoute(req, res) {
	const { name, species, photo } = req.body
	createLostAnimal(name, species, photo)
		.then(() => next())
		.catch(err => {
			res.status(500).send({ message: "Server Error" })
		})
		.catch(err => res.status(500).send({ message: "Server Error" }))
}

function getLostAnimalsRoute(req, res) {
	getLostAnimals()
		.then(lostAnimal => {
			res.json(lostAnimal)
		})
		.catch(err => res.status(500).send({ message: "Server Error 2" }))
}

module.exports = router