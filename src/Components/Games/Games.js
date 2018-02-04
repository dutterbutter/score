import React from 'react'
import './Games.css';

const gameDay = (props) => {
    return (
        
                <div className="col s12">
                    <div className="card white">
                        <div className="card-content">
                            <div className="row">
                                <div className="homeTeam col s6">
                                    <div className="row">
                                        <div className="home col s6">
                                            <p className="left-align"> {props.home_team_city} </p>
                                            <p className="left-align"> {props.home_team} </p>
                                        </div>
                                        <p className="left-align col s6 score"> {props.home_score} </p>
                                    </div>
                                </div>
                                <div className="awayTeam col s6">
                                    <div className="row">
                                            <p className="right-align col s6 score"> {props.away_score} </p>
                                        <div className="away col s6">
                                        <p className="right-align"> {props.away_team_city} </p>
                                        <p className="right-align"> {props.away_team} </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="center-align status"> {props.status} </p>
                                <p className="center-align">W: {props.winning_pitcher_last} ({props.winning_pitcher_era})</p>
                                <p className="center-align">L: {props.losing_pitcher_last} ({props.losing_pitcher_era})</p>
                            </div>
                            <div className="hline-bottom"></div>
                        </div>
                    </div>
                
                </div>
           
                    
    )
}

export default gameDay;