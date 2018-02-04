import React from 'react'
import BottomShelf from './BottomShelf.css';

const bottomShelf = (props) => {
    return (
        <div className="bottomShelf">
            <div className="boxicon">
                <i class="material-icons md">developer_board</i>
                <p className="center-align">Full Box Score</p>
            </div>
        </div>
    )
}

export default bottomShelf;