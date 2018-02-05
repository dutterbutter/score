import React from 'react'
import Venue from './Venue.css'

//Need to include pitcher info here

const venue = (props) => {
    return (
        <div className="venue">
            {/* <p className="center-align">W: {props.winning_pitcher_last} ({props.winning_pitcher_era})</p>
            <p className="center-align">L: {props.losing_pitcher_last} ({props.losing_pitcher_era})</p> */}
            At {props.venue}
        </div>
    )
}

export default venue;