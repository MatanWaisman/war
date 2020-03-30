import React from 'react';
import './App.css';
import Game from './components/Game';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
 
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
