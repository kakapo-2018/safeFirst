import {getFound} from '../utils/api'

const initialState = {
    getFound: getFound()
}

export default function foundPets (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_FOUND_PETS':
        return {
            foundAnimals: [...state, null]
        }
        case 'ADD_FOUND_PET':
        return {
            foundAnimals: [...state, action.payload]
        }
        default:
        return state
    }
}