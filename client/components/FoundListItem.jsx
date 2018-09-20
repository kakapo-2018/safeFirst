import React from 'react'

const FoundListItem = (props) => {
    const found = props.found
    return (
        <div className='found'>
            <p>Found Name</p>
            <p>Found Description</p>
            <p>Found Species </p>
            {/* <p className='name'>{found.name}</p>
            <p className='name'>{found.species}</p> */}
        </div>
    )
}

export default FoundListItem