export default function foundPets (state = [], action) {
    switch (action.type) {
        case 'RECEIVE_FOUND_PETS':
            return action.foundPets        
        case 'ADD_FOUND_PET':
            return [...state, action.payload]
        default:
            return state
    }
}