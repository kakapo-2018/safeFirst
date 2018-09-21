var router = require('express').Router()

router.post('/', lostRoute)
router.get('/', getLostAnimalsRoute)

var { createLostAnimal, getLostAnimals } = require('../db/lostAnimals')

function lostRoute(req, res, next) {
	const { name, species, photo, user_id } = req.body
	createLostAnimal(name, species, photo, user_id)
		.then(() => next())
		.catch(err => {
			res.status(500).send({ message: "Server Error" })
		})
}

function getLostAnimalsRoute(req, res) {
	getLostAnimals()
		.then(lostAnimal => {
			res.json(lostAnimal)
		})
		.catch(err => res.status(500).send({ message: "Server Error 2" }))
}

module.exports = router