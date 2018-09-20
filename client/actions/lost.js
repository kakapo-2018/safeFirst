
export function fetchLostPets () {
    return {
        type: 'RECEIVE_LOST_PETS',
    }
}

export function addLostPet () {
    return {
        type: 'ADD_LOST_PET',
        payload: {
        id: id,
        name: name,
        species: species,
        photo: photo,
        user_id: user_id
        }
    }
}


export default function getLost () {
    return request 
    .get('/api/lost')
    .then (res => {
      const lostAnimals = res.body
      return lostAnimals
    })
    .catch(() => {
      throw Error('You need to implement an API route for /api/lost')
    })
  }

