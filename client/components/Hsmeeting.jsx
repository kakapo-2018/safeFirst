import React from 'react'
import Header from './Header'
import SafetyMeet from './SafetyMeet'
import HazardIn from './HazardIn'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return ( 
        <div>
          <div>
            <Header />
          </div>
          <div>
            <SafetyMeet />
            <HazardIn />
          </div>
        </div>
  ) 
}
}
 
export default Dashboard