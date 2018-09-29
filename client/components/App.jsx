import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Landing from './Landing'


class App extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return ( 
          <Router>  
            
              
            <div className=''>
            <Nav />
                {!this.props.auth.isAuthenticated ?
                  <Route exact path="/" component={Landing} /> : 
                  <Route exact path="/" component={Dashboard} /> 
                }
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
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