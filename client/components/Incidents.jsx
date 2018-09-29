import React from 'react'
import Header from './Header'
import IncidentForm from './IncidentForm'
import IncidentList from './IncidentList'

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
            <IncidentForm />
            <IncidentList />
          </div>
        </div>
  ) 
}
}
 
export default Dashboard