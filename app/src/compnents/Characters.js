import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../actions';
import styled from 'styled-components';

const Img = styled.img`
    border-radius: 10%;
`;
const P = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: underline;
    margin-top: 15px;
`;
const Div = styled.div`
    border: 1px solid black;
    background-color: white;
    width: 30%;
    margin-left: 35%;
`;

const Character = (props) => {

    useEffect(() => {
        props.getCharacter(props.apiID);
    }, [props.apiID])

    return (
        <div>
            {props.isGettingCharacter? (<h3>Getting Character!</h3>) : props.error ? (<div>{props.error}</div>): (
            <Div>
                <Img src={props.image} alt={props.name} />
                <P>Name: {props.name}</P>
                <P>Species: {props.species}</P>
                <P>Type: {props.type}</P>
                <P>Gender: {props.gender}</P>
                <P>Status: {props.status}</P>
            </Div>
            )}
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
    image: state.image,
    isGettingCharacter: state.isGettingCharacer,
    error: state.error,
    apiID: state.apiID
    }
}

export default connect(mapStateToProps, {getCharacter})(Character);