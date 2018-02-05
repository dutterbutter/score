import React from 'react'
import './ScoreCard.css';
import BottomCard from './BottomCard';

const ScoreCard = (props) => {

    let homescore = parseInt(props.home_score, 10);
    let awayscore = parseInt(props.away_score, 10);

    const innings_played = props.innings.map((inning, index) => {
        return <th key={index}>{index + 1}</th>
    })

    //INNING SCORE FOR HOME AND AWAY
    const innings_score_home = props.innings.map((inning, index) => {
        return <th key={index}>{inning.home}</th>
    })

    const innings_score_away = props.innings.map((inning, index) => {
        return <th key={index}>{inning.away}</th>
    })

    return (
        <div className="card">
            <table className="bordered">
                <thead className="shaded">
                    <tr>
                        <th className="scorestatus"> {props.status} </th>
                        {innings_played}
                        <th className="shaded"> R </th>
                        <th> H</th>
                        <th> E </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={homescore > awayscore ? 'bold' : 'lost'}>{props.home_team} <br />
                            ({props.home_win}-{props.home_loss})</td>
                        {innings_score_home}
                        <th className="shaded">{props.run.home}</th>
                        <th> {props.homer.home}</th>
                        <th> {props.error.home} </th>
                    </tr>
                    <tr>
                        <td className={awayscore > homescore ? 'bold' : 'lost'}>{props.away_team}<br />
                            ({props.away_win}-{props.away_loss})</td>
                        {innings_score_away}
                        <th className="shaded">{props.run.away}</th>
                        <th> {props.homer.away}</th>
                        <th> {props.error.away} </th>
                    </tr>
                </tbody>

                <BottomCard
                    venue={props.venue}
                    game_data_directory={props.game_data_directory}
                    detailHandler={props.detailHandler} />
            </table>
        </div>
    )

}

export default ScoreCard;