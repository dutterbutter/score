import React from 'react'
import BottomShelf from './BottomShelf.css';
import { Link } from 'react-router-dom';

const bottomShelf = (props) => {
    
    return (
        <div className="bottomShelf" onClick={() => props.detailHandler(props.game_data_directory)}>
            <Link to="/game-details">
                <div className="boxicon">
                    <i className="material-icons md">developer_board</i>
                    <p className="center-align">Full Box Score</p>
                </div>
            </Link>
        </div>
    )
}

export default bottomShelf;


//