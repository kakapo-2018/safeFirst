import React from 'react'
import LostListItem from './LostListItem'
import { connect } from 'react-redux'

const LostList = (props) => {
  return (
    <div className='lostlist'>
      <h1>Lost</h1>
      {props.lost.map(lost => {
        return (
          <LostListItem lost={lost} />
        )
      })}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    lost: state.lostPets
  }
}

export default connect(
  mapStateToProps,
)(LostList)