import request from 'superagent'

export function fetchLostPets (lostPets) {
    return {
        type: 'RECEIVE_LOST_PETS',
        lostPets
    }
}

export function addLostPet () {
    return {
        type: 'ADD_LOST_PET',
        payload: {
            // id: id,
            name: name,
            species: species,
            photo: photo,
        }
    }
}


export function getLost () {
    return (dispatch) => {
        request
        .get('/api/lost')
        .end((err, res) => {
            if (err) {
              console.error(err.message)
              return
            }
            dispatch(fetchLostPets(res.body))
          })
      }
    }

export function addLost (formInput) {
    return dispatch => {
        request
        .post('/api/lost')
        .send(formInput)
        .end((err, res) => {
            if (err) {
                console.error(err.message)
                return
                }
                dispatch(addLostPet(formInput))
            })
        }
        }