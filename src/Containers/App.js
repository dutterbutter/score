import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import GameData from './GameData';
import Details from './Details'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        gameData: [],
        favoriteTeam: "",
        detailsData: [],
        isGameArray: true,
        isEmpty: false
    }
    this.dateParserHandler = this.dateParserHandler.bind(this);
}

componentDidMount() {

    axios.get('http://localhost:8080/')
        .then(result => {
            this.setState({
                gameData: result.data.games.game
            })
        })
        .catch(err => {
            console.log(err);
        })
}

dateParserHandler = (selectedDate) => {
    let dayDigit = selectedDate.slice(3, 5)
    let month = selectedDate.slice(0, 2)
    let year = selectedDate.slice(6, 10)

    this.gameDayHandler(dayDigit, month, year)
}

gameDayHandler = (day, month, year) => {
    axios.get(`http://localhost:8080/${day}${month}${year}`)
        .then(result => {
            this.setState({
                gameData: result.data.games.game
            })
        })
        .catch(err => {
            console.log(err);
        })
}


detailHandler = (game_data_directory) => {
    axios.post("http://localhost:8080/game-details", { game_data_directory })
        .then(result => {

            this.setState({
                detailsData : result.data.boxscore
            })
        })
        .catch(err => {
            console.log(err);
        })
}

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <h1>Scoreboard App</h1>
        <Route path = "/" exact render={({match}) => 
          <GameData 
            gameData = {this.state.gameData} 
            detailHandler = {this.detailHandler}
            dateParserHandler = {this.dateParserHandler}/> } />
          
          <Route path='/game-details' render={({ match }) =>
           <Details 
            match={match} 
            detailData={this.state.detailsData}
            innings = {this.state.detailsData.linescore} 
            />} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
