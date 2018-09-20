import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Upload from './Upload'
import List from './List'
import {getFound} from '../actions/found'
import {getLost} from '../actions/lost'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getFound())
    this.props.dispatch(getLost())
  }
  
  render() {
    return ( 
      <Router>
        <div className="container has-text-centered">
    
          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
              <Link to='/' className="">
                <h1 className="title is-1">Lost and Found</h1>
              </Link>
              <Nav />
            </div>
          </div> 
    
          <div className=''>
            {!this.props.auth.isAuthenticated ?
              <Route exact path="/" component={Login} />
              : <Route exact path="/" component={List} />
            }
            
            
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/upload" component={Upload} />
            <Route path="/list" component={List} />
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
