import React from 'react';
import LineScore from './LineScore';
import Batters_Home from './BattersHome';
import Batters_Away from './BattersAway';
import FinalScoreDisplay from './FinalScoreDisplay';

const Details = (props) => {
    
    return (
        <div>
        <FinalScoreDisplay
            date = {props.detailData.date}
            home_team_city={props.detailData ? props.detailData.home_fname : 'Loading'}
            away_team_city={props.detailData.away_fname}
            home_score={props.detailData.linescore ? props.detailData.linescore.home_team_runs : 'Loading'}
            away_score={props.detailData.linescore ? props.detailData.linescore.away_team_runs : 'Loading'}
             />

            <LineScore
                id={props.detailData.id}
                home_team_city={props.detailData.home_fname}
                away_team_city={props.detailData.away_fname}
                status={props.detailData.status_ind}
                home_score={props.detailData.linescore  ? props.detailData.linescore.home_team_runs : 'Loading'}
                away_score={props.detailData.linescore  ? props.detailData.linescore.away_team_runs : 'Loading'}
                innings={props.detailData.linescore     ? props.detailData.linescore.inning_line_score : ['Loading', 'Loading']}
                home_hits={props.detailData.linescore   ? props.detailData.linescore.home_team_hits : 'Loading'}
                away_hits={props.detailData.linescore   ? props.detailData.linescore.away_team_hits : 'Loading'}
                home_error={props.detailData.linescore  ? props.detailData.linescore.home_team_errors : 'Loading'}
                away_error={props.detailData.linescore  ? props.detailData.linescore.away_team_errors : 'Loading'}
            />

            <div className="container row">
                <Batters_Home
                    batting={props.detailData.batting ? props.detailData.batting[0].batter : ['Loading','Loading']} 
                    home_name ={props.detailData.home_fname}
                   />
                <Batters_Away
                    batting={props.detailData.batting ? props.detailData.batting[1].batter : ['Loading','Loading']}
                    away_name ={props.detailData.away_fname} 
                    />
            </div>  
        </div>
    )
}
export default Details






