
export default function lostPets (state = [], action) {
    switch (action.type) {
        case 'RECEIVE_LOST_PETS':
            return action.lostPets        
        case 'ADD_LOST_PET':
            return [...state, action.payload]
        default:
            return state
    }
}