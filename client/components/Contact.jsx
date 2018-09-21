import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import {loginError} from '../actions/login'
import {Link} from 'react-router-dom'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      species:'',
      photo:'',
      user_id:''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {animal_name, animal_type, animal_description, animal_image} = this.state
    this.props.dispatch(registerUserRequest(this.state))
  }
  render() {
    const {auth} = this.props
    return (
      <form className="Register form box" onSubmit={this.submit}>
        <h1 className="title is-2">Request Form - Lost Animal</h1>
        <hr />
        {/* Animal Name Form */}
        {auth.errorMessage && <div className="has-text-danger is-large">{auth.errorMessage}</div>}
        <label className="column is-6 label is-large has-text-centered">PlaceHolder
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Hi" type="text" name="animal_name" onChange={this.updateDetails}/>
        </label>
        {/* Animal Type Form */}
        <div className="control">
          <label className="column is-6 label is-large has-text-centered">Animal Species<br/>
          <select value={this.state.value} onChange={this.updateDetails}>
          <option className="input is-large has-text-centered is-fullwidth" value="Cat">Cat</option>
          <option className="input is-large has-text-centered is-fullwidth" value="Dog">Dog</option>
        </select>
          </label>
          </div>
          {/* Animal Photo Form */}
          <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Animal Photo
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Lost Animal Image" type="text" name="animal_description" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        {/* Animal User Form */}
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">User Name
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Uploader Name" type="text" name="animal_image" onChange={this.updateDetails}/>
            </label>
        </div>
        <input className="button is-success is-large is-fullwidth" value="Submit" type="submit" />
        <a href="./">Back</a>
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Contact)


