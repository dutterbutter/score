import React from 'react'
import './Games.css';

const gameDay = (props) => {
    return (
        <div className="container">
            <div className="col s12 m4 l3">
                <div className="card white">
                    <div className="card-content black-text">
                        <div className="homeTeam">
                            <p className="left-align"> {props.home_team_city} </p>
                            <p className="left-align"> {props.home_score} </p>
                            <p className="left-align"> {props.home_team} </p>

                            <p className="right-align"> {props.away_team_city} </p>
                            <span className="right-align"> {props.away_team} </span>
                            <p className="right-align"> {props.away_score} </p>
                            <p className="center-align"> {props.status} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gameDay;