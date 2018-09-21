import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'
import {Link} from 'react-router-dom'

const List = () => {
  return (
    <div className='foundlist'>
      <p className='welcome'>List page</p>
      <button><Link to='/Lost'>Upload Lost Animal</Link></button> 
      <button><Link to='/Found'>Upload Found Animal</Link></button>
    </div>
  )
}

export default List