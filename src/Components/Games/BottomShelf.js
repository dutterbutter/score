import React from 'react'

const bottomShelf = (props) => {
    return (
        <div className="bottomShelf">
            <div className="boxscore">
                <i class="material-icons">developer_board</i>
                <p className="center-align">Full Box Score</p>
            </div>
            <div className="media">
                <i class="material-icons">videocam</i>
                <p className="center-align">Media</p>
            </div>
        </div>
    )
}

export default bottomShelf;