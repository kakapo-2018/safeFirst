
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
        id: id,
        name: name,
        species: species,
        photo: photo,
        user_id: user_id
        }
    }
}


export default function getLost () {
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

