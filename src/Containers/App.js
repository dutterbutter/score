import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Datepicker from '../Components/Datepicker';
import GameData from './GameData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      gameData: [],
      favoriteTeam: "",
      isGameArray: true,
      isEmpty: false
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:8080/')
  //     .then(result => {
  //       this.setState({
  //         gameData: result.data.games.game
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }


  // dateParserHandler = (selectedDate) => {
  //   let dayDigit = selectedDate.slice(3, 5)
  //   let month = selectedDate.slice(0, 2)
  //   let year = selectedDate.slice(6, 10)

  //   this.gameDayHandler(dayDigit, month, year)
  // }

  // gameDayHandler = (day, month, year) => {
  //   axios.get(`http://localhost:8080/${day}${month}${year}`)
  //     .then(result => {
  //       this.setState({
  //         gameData: result.data.games.game
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }





  render() {


    // const games = this.state.gameData.map(game => {
    //   return <Games key={game.id}
    //     home_team_city={game.home_team_city}
    //     home_team={game.home_team_name}
    //     away_team_city={game.away_team_city}
    //     away_team={game.away_team_name}
    //     status={game.status.status}
    //     home_score={game.linescore.r.home}
    //     away_score={game.linescore.r.away} />
    // })


    return (
      <BrowserRouter>
        <div className="App">
          <h1>Scoreboard App</h1>
        
          <GameData />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
