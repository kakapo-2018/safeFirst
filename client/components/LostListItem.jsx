import React from 'react'
import {getLost} from '../actions/lost'

const LostListItem = (props) => {
    const lost = props.lost
    return (
        <div className='lost'>
            <p>Lost Name</p>
            <p>Lost Description</p>
            <p>Lost Species </p>
            
        </div>
    )
}

export default LostListItem
