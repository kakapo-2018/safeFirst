import React from 'react'


// import LostList from '../../seeds/lost' // fill in once we get the array name

const LostList = (props) => {
    return (
      <div className='lostlist'>
        <p className='welcome'>Lost Animals</p>
        {/* {props.lost.map(lost => {  // need the name of our array in db
          return (
            <LostListItem key={lost.id}/>
          )
        })} */}
      </div>
    )
  }
  
  export default LostList