import React from 'react'
import './Games.css';

const gameDay = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card white">
                        <div className="card-content black-text">
                            <div className="row">
                                <div className="homeTeam col s6">
                                    <div className="row">
                                        <div className="home col s6">
                                            <p className="left-align"> {props.home_team_city} </p>
                                            <p className="left-align"> {props.home_team} </p>
                                        </div>
                                        <p className="left-align col s6"> {props.home_score} </p>
                                    </div>
                                </div>
                                <div className="awayTeam col s6">
                                    <div className="row">
                                        <div className="away col s6">
                                            <p className="right-align"> {props.away_score} </p>
                                        </div>
                                        <p className="right-align"> {props.away_team_city} </p>
                                        <p className="right-align"> {props.away_team} </p>
                                    </div>
                                </div>
                                <p className="center-align"> {props.status} </p>
                                <p className="center-align">W: {props.winning_pitcher_last}({props.winning_pitcher_era})</p>
                                <p className="center-align">L: {props.losing_pitcher_last}({props.losing_pitcher_era})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gameDay;