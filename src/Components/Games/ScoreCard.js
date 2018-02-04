import React from 'react'
import Venue from './Venue'
import './ScoreCard.css';
import BottomShelf from './BottomShelf';

const ScoreCard = (props) => {

    let homescore = parseInt(props.home_score);
    let awayscore = parseInt(props.away_score);

    const innings_played = props.innings.map((inning, index) => {
        return <th>{index + 1}</th>
    })

    //INNING SCORE FOR HOME AND AWAY
    const innings_score_home = props.innings.map(inning => {
        return <th>{inning.home}</th>
    })

    const innings_score_away = props.innings.map(inning => {
        return <th>{inning.away}</th>
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
                    <tr>
                    <td colspan="13">
                        <Venue
                            venue={props.venue} />
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <BottomShelf />
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default ScoreCard;