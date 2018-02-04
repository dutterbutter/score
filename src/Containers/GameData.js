import React from 'react';
import axios from 'axios';
import Games from '../Components/Games/Games';
import Datepicker from '../Components/Datepicker';
import GameTable from '../Components/Games/GameTable';
import ScoreCard from '../Components/Games/ScoreCard';

class GameData extends React.Component {
    constructor() {
        super()
        this.state = {
            gameData: [],
            favoriteTeam: "",
            isGameArray: true,
            isEmpty: false
        }
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

    render() {

        const games = this.state.gameData.map(game => {
            return <Games key={game.id}
                home_team_city={game.home_team_city}
                home_team={game.home_team_name}
                away_team_city={game.away_team_city}
                away_team={game.away_team_name}
                status={game.status.status}
                home_score={game.linescore.r.home}
                away_score={game.linescore.r.away}
                winning_pitcher_last={game.winning_pitcher.last}
                losing_pitcher_name={game.losing_pitcher.last}
                winning_pitcher_era={game.winning_pitcher.era}
                losing_pitcher_era={game.losing_pitcher.era}
                isEmpty={this.state.isEmpty} />
        })

        const glanceGames = this.state.gameData.map(game => {
            return <GameTable
                key={game.id}
                home_team_name={game.home_name_abbrev}
                away_team_name={game.away_name_abbrev}
                home_score={game.linescore.r.home}
                away_score={game.linescore.r.away}
                status={game.status.status}
            />
        })

        const scoreCard = this.state.gameData.map(game => {
            return <ScoreCard key={game.id}
                home_team_city={game.home_team_city}
                home_team={game.home_team_name}
                away_team_city={game.away_team_city}
                away_team={game.away_team_name}
                status={game.status.status}
                home_score={game.linescore.r.home}
                away_score={game.linescore.r.away}
                innings  = {game.linescore.inning}
                run = {game.linescore.r}
                homer = {game.linescore.h}
                error = {game.linescore.e}
                home_win = {game.home_win}
                home_loss = {game.home_loss}
                away_win = {game.away_win}
                away_loss = {game.away_loss}
                venue ={game.venue}
                />
        })


        return (
            <div>
                <div className="container">
                    <div className="left-align">
                        <Datepicker
                            dateParserHandler={this.dateParserHandler} />
                    </div>
             
                            <div>
                                <div className="row">
                                    <div className="left-align">Games At a Glance </div>
                                    {glanceGames}
                                </div>
                                {/* <div className="row">
                                    <p className="left-align">Full Scoreboard</p>
                                    {games}
                                </div> */}
                            </div>
                    {scoreCard}
                </div>
            </div>
        );
    }
}

export default GameData;
