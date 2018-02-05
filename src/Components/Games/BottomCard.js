import React from 'react'
import Venue from './Venue'
import './ScoreCard.css';
import BoxscoreTrigger from './BoxscoreTrigger';
import Media from './Media';

//Need to dynamically determine number of TR for each table for colspan
//Need to work on <Media component

const bottomCard = (props) => {

    // let rowCount = document.getElementById("mainTable").rows.length
    // console.log(rowCount);

    return (
        <tbody>
            <tr>
                <td colSpan='13'>
                    <Venue
                        venue={props.venue} />
                </td>
            </tr>
            <tr>
                <td className="boxscore" colSpan="6">
                    <BoxscoreTrigger
                        game_data_directory={props.game_data_directory}
                        detailHandler={props.detailHandler} />
                </td>
                <td className="media" colSpan="7">
                    <Media />
                </td>
            </tr>
        </tbody>
    )
}

export default bottomCard;