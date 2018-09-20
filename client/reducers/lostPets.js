import {something} from '../utils/api'

const initialState = {}

export default function lost (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_LOST_PETS':
        return {
            ...state,
            ???
        }
        case 'ADD_LOST_PET':
        return {
            ...state,
            ???
        }
        default:
        return state
    }
}