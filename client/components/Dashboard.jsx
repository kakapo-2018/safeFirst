import React from 'react'
import Header from './Header'
import HazardsDay from './HazardsDay'
import Statistics from './Statistics'
import Nav from './Nav'


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
          <hr />
            <HazardsDay />
            <hr />
            <Statistics />
            <hr />
          </div>
        </div>
  ) 
}
}
 
export default Dashboard