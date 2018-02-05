import React from 'react';

//NEED TO OPTIMIZE
//Props is passed from Details Component
//Need to add pitchers

const LineScore = (props) => {

    let homescore = parseInt(props.home_score, 10);
    let awayscore = parseInt(props.away_score, 10);

    //OUTPUTS INNINGS PLAYED 
    const innings_played = props.innings.map((inning, index) => {
        return <th key={index}>{index + 1}</th>
    })

    //INNING SCORE FOR HOME AND AWAY TEAMS
    const innings_score_home = props.innings.map((inning, index) => {
        return <th key={index}>{inning.home}</th>
    })

    const innings_score_away = props.innings.map((inning, index) => {
        return <th key={index}>{inning.away}</th>
    })

    return (
        <div className="container">
            <div className="card">
                <table>
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
                            <td className={homescore > awayscore ? 'bold' : 'lost'}>{props.home_team_city}
                            </td>
                            {innings_score_home}
                            <th className="shaded">{props.home_score}</th>
                            <th> {props.home_hits}</th>
                            <th> {props.home_error} </th>
                        </tr>
                        <tr>
                            <td className={awayscore > homescore ? 'bold' : 'lost'}>{props.away_team_city}</td>
                            {innings_score_away}
                            <th className="shaded">{props.away_score}</th>
                            <th> {props.away_hits}</th>
                            <th> {props.away_hits} </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LineScore