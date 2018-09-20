import React from 'react'


const LostListItem = (props) => {
    const lost = props.lost
    return (
        <div className='lost'>
            <h1>Why you lost?</h1>
            {/* <p className='name'>{lost.name}</p>
            <p className='name'>{lost.name}</p>
            <img src={lost.photo}/> */}
        </div>
    )
}

export default LostListItem
