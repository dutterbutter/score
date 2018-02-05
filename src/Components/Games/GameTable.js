import React from 'react'
import './GameTable.css';

const GameTable = (props) => {

    let homescore = parseInt(props.home_score, 10);
    let awayscore = parseInt(props.away_score, 10);

    return (
        <div className="card col s1 game-scores hide-on-med-and-down">
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th className="game-status">{props.status}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={homescore > awayscore ? 'bold' : 'lost'} >{props.home_team_name}</td>
                        <td>{props.home_score}</td>
                    </tr>
                    <tr>
                        <td className={awayscore > homescore ? 'bold' : 'lost'} >{props.away_team_name}</td>
                        <td>{props.away_score}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GameTable;