import { GET_CHARACTER_START, GET_CHARACTER_SUCCESS, GET_CHARACTER_FAIL, INCREMENT_CHARACTER } from '../actions';

const initialState = {
    id: '',
    name: '',
    species: '',
    type: '',
    gender: '',
    status: '',
    image: '',
    isGettingCharacter: false,
    apiID: 1,
    error: ''
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
            case GET_CHARACTER_FAIL:
                return {
                    ...state,
                    error: action.payload,
                    isGettingCharacter: false
                }
            case INCREMENT_CHARACTER:
                return {
                    ...state,
                    apiID: state.apiID + 1
                }

        default:
            return state
    }
}