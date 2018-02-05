import React from 'react'
import Venue from './Venue.css'

//Need to include pitcher info here

const venue = (props) => {
    return (
        <div className="venue">
            <p className="left-align">W: {props.winning_pitcher.last} ({props.winning_pitcher.era})</p>
            <p className="left-align">L: {props.losing_pitcher.last} ({props.losing_pitcher.era})</p>
            At {props.venue}
        </div>
    )
}

export default venue;