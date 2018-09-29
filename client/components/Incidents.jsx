import React from 'react'
import Header from './Header'
import IncidentForm from './IncidentForm'
import IncidentList from './IncidentList'

class Incidents extends React.Component {
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
            <IncidentForm />
            <hr />
            <IncidentList />
          </div>
        </div>
  ) 
}
}
 
export default Incidents