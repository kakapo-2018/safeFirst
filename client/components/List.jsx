import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animal_name: '',
      animal_type:'',
      animal_description:'',
      animal_image:''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {user_name, password, confirm_password, contact_details, email_address} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    this.props.dispatch(registerUserRequest(this.state))
  }
  render() {
    const {auth} = this.props
    return (
      <form className="Register form box" onSubmit={this.submit}>
        <h1 className="title is-2">List</h1>
        <hr />
        {auth.errorMessage && <div className="has-text-danger is-large">{auth.errorMessage}</div>}
        <label className="column is-6 label is-large has-text-centered">Animal Name
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Animal Name" type="text" name="animal_name" onChange={this.updateDetails}/>
        </label>
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Animal Type
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Cat/Dog" type="text" name="animal_type" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered">Animal Description
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Animal Description" type="text" name="animal_description" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Animal Image
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Animal Image" type="text" name="animal_image" onChange={this.updateDetails}/>
          </label>
        </div>
        <input className="button is-success is-large is-fullwidth" value="Submit" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(List)
