var router = require('express').Router()

router.post('/lost', lostRoute)

var createLostAnimal = require('../db/getLostAnimals')

function lostRoute(req, res) {
	const { name, species, photo } = req.body
	createLostAnimal(name, species, photo)
		.then(() => next())
		.catch(err => {
			res.status(500).send({ message: "Server Error" })
		})
		.catch(err => res.status(500).send({ message: "Server Error" }))
}

module.exports = router