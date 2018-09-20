export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'


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



