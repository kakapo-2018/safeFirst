import React from 'react'
import LostList from './LostList'
import FoundList from './FoundList'
import {Link} from 'react-router-dom'
const List = (props) => {
  return (
    <div className="columns">
     
        <label className="column is-6 label is-large has-text-centered"> <LostList /> <a class="button">Button</a></label>
        
        <label className="column is-6 label is-large has-text-centered"> <FoundList /> <a class="button">Button</a></label>
        
        
      
      </div>
      
  )
}

export default List


