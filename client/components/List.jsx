import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'
import LostList from './LostList'
import FoundList from './FoundList'

const List = (props) => {
  return (
    <div className='foundlist'>
      <p className='welcome'>List page</p>
      <h1>this is the lost list</h1>
      <LostList/>
      <h1>this is the found list list</h1>
      <FoundList/>
    </div>
  )
}

export default List