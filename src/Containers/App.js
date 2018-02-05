import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import GameData from './GameData';  
import Details from '../Components/Details/Details'
import MediaCoverage from '../Components/MediaCoverage/MediaCoverage';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gameData: [],
            favoriteTeam: "",
            detailsData: [],
            isEmpty: false
        }
        this.dateParserHandler = this.dateParserHandler.bind(this);
    }

    //Set to Last Game of Reg Season
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


    //Slices out Month,Day,Year for gameDayHandler and calls it
    dateParserHandler = (selectedDate) => {
        let dayDigit = selectedDate.slice(3, 5)
        let month = selectedDate.slice(0, 2)
        let year = selectedDate.slice(6, 10)

        this.gameDayHandler(dayDigit, month, year)
    }

    //Handles retrieving data for selected day
    //Sets data in state
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

    //Handles retrieving data for BOXSCORE of selected GAME
    //Different ENDPOINT 
    detailHandler = (game_data_directory) => {
        axios.post("http://localhost:8080/game-details", { game_data_directory })
            .then(result => {
                this.setState({
                    detailsData: result.data.boxscore
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
                    
                    <Route path="/" exact render={({ match }) =>
                        <GameData
                            gameData={this.state.gameData}
                            detailHandler={this.detailHandler}
                            dateParserHandler={this.dateParserHandler} />} 
                            />

                    <Route path='/game-details' render={({ match }) =>
                        <Details
                            match={match}
                            detailData={this.state.detailsData}
                            innings={this.state.detailsData.linescore}/>} 
                            />

                    <Route path='/game-media' render={({ match }) =>
                        <MediaCoverage
                            match={match}
                            gameData={this.state.gameData}/>} 
                            />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
