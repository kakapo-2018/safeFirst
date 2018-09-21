import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Lost from './AddLost'
import List from './List'
import Contact from './Contact'
import {getFound} from '../actions/found'
import {getLost} from '../actions/lost'
import Found from './AddFound'
import Footer from './Footer'



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }
  
  render() {
    return ( 
      <Router>
        <div className="container has-text-centered">
    
          <div className="hero is-small is-rprimary">
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
            <Route path="/lost" component={Lost} />
            <Route path="/found" component={Found} />

            <Route path="/list" component={List} />
            <Route path="/contact" component={Contact} />

          </div>
    <Footer/>
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
