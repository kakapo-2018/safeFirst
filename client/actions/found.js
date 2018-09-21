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
        // id: id,
        species: species,
        photo: photo,
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


export function addFound (formInput) {
    return dispatch => {
        console.log(formInput)
        request
        .post('/api/found')
        .send(formInput)
        .end((err, res) => {
            if (err) {
                console.error(err.message)
                return
              }
              dispatch(addFoundPet(formInput))
            })
        }
      }