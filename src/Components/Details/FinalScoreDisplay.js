import React from 'react';
import FinalScoreDisplay from './FinalScoreDisplay.css';

//Should crate a function that takes care of splitting the teams name down
//Priority M

//This shows the score, team names, and date on details UI page

const scoreDisplay = (props) => {
    
    let home_fname = String(props.home_team_city).split(" ");
    let homeFanName = home_fname[home_fname.length -1];
   
    let away_fname = String(props.away_team_city).split(" ");
    let awayFanName = away_fname[away_fname.length -1];

    return (
        <div>
            <div className="row" id="score-display">
                <div className="final-display col s6 right-align">{homeFanName} {props.home_score},</div>
                <div className="final-display col s6 left-align">{awayFanName} {props.away_score}</div>
            </div>
            <div className="date center-align">{props.date}</div>
        </div>
    )
}
export default scoreDisplay;