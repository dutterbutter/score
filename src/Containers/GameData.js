import React from 'react';
import axios from 'axios';
import Games from '../Components/Games/Games';
import Datepicker from '../Components/Datepicker';
import GamesTest from '../Components/Games/Games';

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
                losing_pitcher_era={game.losing_pitcher.era} />
        })

        return (
            <div>
                <Datepicker
                    dateParserHandler={this.dateParserHandler} />
                <div className="container">
                    <div className="row">
                        {games}
                    </div>
                </div>
            </div>
        );
    }
}

export default GameData;
