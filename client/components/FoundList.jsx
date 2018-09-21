import React from 'react'
import FoundListItem from './FoundListItem'
import { connect } from 'react-redux'

const FoundList = (props) => {
  return (
    <div className='foundlist'>
      <h1>Found</h1>

      {props.found.map(found => {
        return (
          <FoundListItem found={found} />
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    found: state.foundPets
  }
}

export default connect(
  mapStateToProps,
)(FoundList)
