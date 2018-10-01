import React from 'react'
import Header from './Header'
import HazardsDay from './HazardsDay'
import Statistics from './Statistics'

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
          <div className="dashboardcontainer">
            <div className="left">
              <HazardsDay />
             </div>
            <div className="right">
              <Statistics />
            </div>
          </div>  
        </div>
  ) 
}
}
 
export default Dashboard