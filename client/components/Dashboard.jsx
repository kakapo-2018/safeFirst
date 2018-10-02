import React from 'react'
import Header from './Header'
import HazardsDay from './HazardsDay'
import Statistics from './Statistics'
import DashboardHeader from './DashboardHeader'
import HazardsGeneric from './HazardsGeneric'




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
            <DashboardHeader />
          </div>
          <div className="dashboardcontainer">
            <div className="left">
              <HazardsDay />
              <HazardsGeneric />
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