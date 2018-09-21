import React from 'react'

const LostListItem = (props) => {
    const lost = props.lost
    return (
        <div className='lost'>
            <img src={lost.photo}></img>
            <p className='name'>{lost.name}</p>
            <p className='species'>{lost.species}</p>
        </div>
    )
}

export default LostListItem
