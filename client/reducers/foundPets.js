import {something} from '../utils/api'

const initialState = {}

export default function found (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_FOUND_PETS':
        return {
            ...state,
            ???
        }
        case 'ADD_FOUND_PET':
        return {
            ...state,
            ???
        }
        default:
        return state
    }
}