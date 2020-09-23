import { GET_CHARACTER_START, GET_CHARACTER_SUCCESS } from '../actions';

const initialState = {
    id: '',
    name: '',
    species: '',
    type: '',
    gender: '',
    status: '',
    image: '',
    isGettingCharacter: false
};

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTER_START:
            return {
                ...state,
                isGettingCharacter: true
            }
        case GET_CHARACTER_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                species: action.payload.species,
                type: action.payload.type,
                gender: action.payload.gender,
                status: action.payload.status,
                image: action.payload.image,
                isGettingCharacter: false
            }

        default:
            return state
    }
}