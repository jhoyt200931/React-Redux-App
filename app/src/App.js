import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Character from './compnents/Characters';
import { incrementCharacter } from './actions';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url('https://images4.alphacoders.com/794/thumb-1920-794366.jpg');
  height: 750px;
`;

const Title = styled.h1`
  font-size: 2.2em;
  font-style: italic;
  text-decoration: underline;
`;

const Button = styled.button`
  height: 50px;
  border-radius: 15%;
  color: white;
  background-color: black;
`;

function App(props) {

  const handleClick = () => {
    props.incrementCharacter();
  }

  return (
    <Div className="App">
      <Title>Aw Geez! Welcome To The Rick and Morty Character Page!</Title>
      <Character />
      <Button onClick={handleClick}>Next Character</Button>
    </Div>
  );
}

const mapStateToProps = (state) => {
  return {
    apiID: state.apiID
  }
}

export default connect(mapStateToProps, {incrementCharacter})(App);
