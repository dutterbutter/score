import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Details from '../Components/Details';
import GameData from './GameData';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <h1>Scoreboard App</h1>
        <Route path = "/" exact component={GameData} />
        <Route path = "/game-details" component = {Details} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
