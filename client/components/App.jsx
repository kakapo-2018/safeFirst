import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Incidents from './Incidents'
import Hsmeeting from './Hsmeeting'
import Dailymeeting from './Dailymeeting'
import Nav from './Nav'
import Header from './Header'
import SafetyMeetContainer from './SafetyMeetContainer'


class App extends React.Component {
    constructor(props) {
      super(props)
    }


// When NOT logged in, show the following components: Nav & Landing
// When logged in, show the following components: Header & Dashboard

// Authentication commented out below as currently not working


    render() {
        return ( 
          <Router>  
            <div>
              <div>
                <Route exact path="/" component={Nav} />             
                <Route exact path="/" component={Landing} />             
              </div> 
              <div>
                  { this.props.auth.isAuthenticated && <Dashboard /> }
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/incidents" component={Incidents} />
                  <Route path="/hsmeeting" component={Hsmeeting} />
                  <Route path="/hsmeetinglist" component={SafetyMeetContainer} />
                  <Route path="/dailymeeting" component={Dailymeeting} />
              </div>
            </div>
          </Router>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)