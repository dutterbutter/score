import React from 'react'
import Venue from './Venue.css'

const venue = (props) => {
    return (
        <div className="venue">
           At {props.venue}
        </div>
    )
}

export default venue;