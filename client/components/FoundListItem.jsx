import React from 'react'

const FoundListItem = (props) => {
    const found = props.found
    return (
        <div className='found'>
            <img src={found.photo}></img>
            <p className='species'>{found.species}</p>
        </div>
    )
}

export default FoundListItem