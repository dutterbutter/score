import React from 'react'
import Venue from './Venue'
import './ScoreCard.css';
import BottomShelf from './BottomShelf';
import Media from './Media';

const bottomCard = (props) => {
    return (
        <tbody>
            <tr>
                <td colSpan="13">
                    <Venue
                        venue={props.venue} />
                </td>
            </tr>
            <tr>
                <td className="bottomShelf" colSpan="6">
                    <BottomShelf
                        game_data_directory={props.game_data_directory}
                        detailHandler={props.detailHandler} />
                </td>
                <td className="bottomShelf" colSpan="7">
                    <Media />
                </td>
            </tr>
        </tbody>
    )
}

export default bottomCard;