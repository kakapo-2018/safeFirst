import React from 'react'
import FoundListItem from './FoundListItem'


//import FoundList from '../../' // fill in once we get the data

const FoundList = (props) => {
    return (
      <div className='foundlist'>
        <p className='welcome'>Found Animals</p>
        <FoundListItem/>
        {/* {props.found.map(found => {  // need the name of our array in db
          return (
            <FoundListItem key={found.id} />
          )
        })} */}
      </div>
    )
  }
  
  export default FoundList