import axios from 'axios';

export const GET_CHARACTER_START = 'GET_CHARACTER_START';
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_FAIL = 'GET_CHARACTER_FAIL';
export const INCREMENT_CHARACTER = 'INCREMENT_CHARACTER';

export const getCharacter = (apiID) => (dispatch) => {
    dispatch({type: GET_CHARACTER_START});
    axios.get(`https://rickandmortyapi.com/api/character/${apiID}`)
        .then(res => {
            console.log(res);
            dispatch({type: GET_CHARACTER_SUCCESS, payload: {
                id: res.data.id,
                name: res.data.name,
                species: res.data.species,
                type: res.data.type,
                gender: res.data.gender,
                status: res.data.status,
                image: res.data.image
            } })
        })
        .catch(err => {
            console.log(err.message);
            dispatch({type: GET_CHARACTER_FAIL, payload:`Error receiving Character information form the api: ${err.message}`})
        })
}

export const incrementCharacter = () => (dispatch) => {
    dispatch({type: INCREMENT_CHARACTER});
} 