import React from 'react'
import LostList from './LostList'
import FoundList from './FoundList'
import {Link} from 'react-router-dom'
const List = (props) => {
  return (
    <div className='foundlist'>
      <p className='welcome'>List page</p>
      <button><Link to='/Lost'>Upload Lost Animal</Link></button> 
      <button><Link to='/Found'>Upload Found Animal</Link></button>
      <LostList />
      <FoundList />
    </div>
  )
}

export default List