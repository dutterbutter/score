import React from 'react'
import BoxscoreTrigger from './BoxscoreTrigger.css';
import { Link } from 'react-router-dom';

const boxscoreTrigger = (props) => {
    
    return (
        <div className="boxscore" onClick={() => props.detailHandler(props.game_data_directory)}>
            <Link to="/game-details">
                <div className="boxicon">
                    <i className="material-icons md">developer_board</i>
                    <p className="center-align">Full Box Score</p>
                </div>
            </Link>
        </div>
    )
}

export default boxscoreTrigger;
