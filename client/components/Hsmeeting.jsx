import React from 'react'
import Header from './Header'
import SafetyMeet from './SafetyMeet'
import HazardIn from './HazardIn'
import HSmeetingHeader from './HsmeetingHeader'
import Minutes from './Minutes'

class Hsmeeting extends React.Component {
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
            <HSmeetingHeader />
        </div>
        <div className="dashboardcontainer">
          <div className="left">
            <SafetyMeet />
          </div>
          <div className="right">
            <HazardIn {...this.props}/>
          </div>
        </div>
        <div>
          <Minutes />
        </div>
      </div>
    )
  }
}
 
export default Hsmeeting