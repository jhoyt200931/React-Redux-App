import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../actions';

const Character = (props) => {

    useEffect(() => {
        props.getCharacter();
    }, [])

    return (
        <div>
            <img src={props.image} alt={props.name} />
            <p>Name: {props.name}</p>
            <p>Species: {props.species}</p>
            <p>Type: {props.type}</p>
            <p>Gender: {props.gender}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    id: state.id,
    name: state.name,
    species: state.species,
    type: state.type,
    gender: state.gender,
    status: state.status,
    image: state.image
    }
}

export default connect(mapStateToProps, {getCharacter})(Character);