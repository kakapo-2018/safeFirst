const db = require('./connection')

function createLostAnimal(name, species, photo) {
	return db('lost')
		.insert({ name, species, photo })
		.catch(err => reject(err))
}

function getLostAnimals() {
	return db('lost').select()
}

module.exports = {
	createLostAnimal,
	getLostAnimals
}