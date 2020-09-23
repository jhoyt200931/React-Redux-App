import axios from 'axios';

export const GET_CHARACTER_START = 'GET_CHARACTER_START';
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
export const GET_CHARACTER_FAIL = 'GET_CHARACTER_FAIL';

export const getCharacter = () => (dispatch) => {
    dispatch({type: GET_CHARACTER_START});
    axios.get('https://rickandmortyapi.com/api/characte/1')
        .then(res => {
            console.log(res);
            dispatch({type: GET_CHARACTER_SUCCESS, payload: {
                id: res.data.id,
                name: res.data.name,
                species: res.data.species,
                type: res.data.type,
                gender: res.data.gender,
                image: res.data.image
            } })
        })
        .catch(err => {
            console.log(err.message);
            // dispatch({type: GET_CHARACTER_FAIL, payload: err})
        })
}