import {getLost} from '../utils/api'
import {RECEIVE_LOST_PETS, ADD_LOST_PET} from '../actions/lost'

const initialState = {
    getLost: getLost()
}

export default function lostPets (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_LOST_PETS:
        return {
            lostAnimals: [...state, null]
        }
        case ADD_LOST_PET:
        return {
            lostAnimals: [...state, action.payload]
        }
        default:
        return state
    }
}