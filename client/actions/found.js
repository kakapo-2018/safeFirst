
export function fetchFoundPets () {
    return {
        type: 'RECEIVE_FOUND_PETS',
    }
}

export function addFoundPet () {
    return {
        type: 'ADD_FOUND_PET',
        payload: {
        id: id,
        species: species,
        photo: photo,
        user_id: user_id
        }
    }
}


export default function getFound () {
    return request 
    .get('/api/found')
    .then (res => {
      const foundAnimals = res.body
      return foundAnimals
    })
    .catch(() => {
      throw Error('You need to implement an API route for /api/found')
    })
  }
  
