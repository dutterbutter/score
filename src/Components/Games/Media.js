import React from 'react'
import { Link } from 'react-router-dom';

const media = (props) => {
    return (
        <div className="boxscore">
            <Link to="/game-media">
                <div className="boxicon">
                    <i className="material-icons md">videocam</i>
                    <p className="center-align">Media Coverage</p>
                </div>
            </Link>
        </div>
    )
}

export default media;