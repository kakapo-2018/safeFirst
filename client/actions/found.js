import request from 'superagent'

export function fetchFoundPets (foundPets) {
    return {
        type: 'RECEIVE_FOUND_PETS',
        foundPets
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


export function getFound () {
    return (dispatch) => {
        request
        .get('/api/found')
        .end((err, res) => {
            if (err) {
              console.error(err.message)
              return
            }
            dispatch(fetchFoundPets(res.body))
          })
      }
    }
