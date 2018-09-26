import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'

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
                <Route exact path="/" component={Login} /> : <Route exact path="/" component={Login} /> //Second component needs to be updated OR this logic needs to be changed!!!!
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