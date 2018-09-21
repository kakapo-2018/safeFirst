const db = require('./connection')

function createLostAnimal(name, species, photo, user_id) {
	return db('lost')
		.insert({ name, species, photo, user_id })
		.catch(err => reject(err))
}

function getLostAnimals() {
	return db('lost').select()
}

module.exports = {
	createLostAnimal,
	getLostAnimals
}