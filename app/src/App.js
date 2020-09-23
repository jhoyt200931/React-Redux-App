import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Character from './compnents/Characters';

function App() {
  return (
    <div className="App">
      <Character />
    </div>
  );
}

export default connect(() => {}, {})(App);
