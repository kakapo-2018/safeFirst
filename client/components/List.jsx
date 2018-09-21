import React from 'react'
import LostList from './LostList'
import FoundList from './FoundList'

const List = (props) => {
  return (
    <div className='foundlist'>
      <LostList />
      <FoundList />
    </div>
  )
}

export default List