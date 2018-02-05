import React from 'react';
import LineScore from './LineScore';
import BattersHome from './BattersHome';
import BattersAway from './BattersAway';
import Loading from './Loading';
import FinalScoreDisplay from './FinalScoreDisplay';

//Page renders through router/link, triggered by onclick 
//Data is passed from App.js 

//NEED TO OPTIMIZE 
//Need to account for the time it takes to grab burried data
//how can I do this alternatively to using a ternary ?

//SOLUTIONS TO OPTIMIZE ? 

const Details = (props) => {
    
    return (
        <div>
        <FinalScoreDisplay
            date = {props.detailData.date}
            home_team_city={props.detailData       ? props.detailData.home_fname               : <Loading />}
            away_team_city={props.detailData.away_fname}
            home_score={props.detailData.linescore ? props.detailData.linescore.home_team_runs : <Loading />}
            away_score={props.detailData.linescore ? props.detailData.linescore.away_team_runs : <Loading />}
            />

            <LineScore
                id={props.detailData.id}
                home_team_city={props.detailData.home_fname}
                away_team_city={props.detailData.away_fname}
                status={props.detailData.status_ind}
                home_score={props.detailData.linescore  ? props.detailData.linescore.home_team_runs    : <Loading />}
                away_score={props.detailData.linescore  ? props.detailData.linescore.away_team_runs    : <Loading />}
                innings={props.detailData.linescore     ? props.detailData.linescore.inning_line_score : ['Loading...', 'Loading...']}
                home_hits={props.detailData.linescore   ? props.detailData.linescore.home_team_hits    : <Loading />}
                away_hits={props.detailData.linescore   ? props.detailData.linescore.away_team_hits    : <Loading />}
                home_error={props.detailData.linescore  ? props.detailData.linescore.home_team_errors  : <Loading />}
                away_error={props.detailData.linescore  ? props.detailData.linescore.away_team_errors  : <Loading />}
            />

            <div className="container row">
                <BattersHome
                    batting={props.detailData.batting ? props.detailData.batting[0].batter : ['Loading...','Loading...']} 
                    home_name ={props.detailData.home_fname}
                   />
                <BattersAway
                    batting={props.detailData.batting ? props.detailData.batting[1].batter : ['Loading...','Loading...']}
                    away_name ={props.detailData.away_fname} 
                   />
            </div>  
        </div>
    )
}
export default Details






