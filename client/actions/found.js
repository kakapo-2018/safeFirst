export const RECEIVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'
export const ADD_FOUND_PET = 'ADD_FOUND_PET'


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



