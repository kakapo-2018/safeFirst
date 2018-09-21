import React from 'react'
import LostList from './LostList'
import FoundList from './FoundList'

const List = (props) => {
  return (
    <div>
      <div className='"columns"'>
        <label className="column is-6 label is-large has-text-centered"> <LostList />
        </label>

      </div>
      <div className='columns'>
        <label className="column is-6 label is-large has-text-centered"> <FoundList />
        </label>
      </div>
      </div>
  )
}

export default List


{/* <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Contact Details
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Contact Details" type="text" name="contact_details" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered">Email Address
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Email Adress" type="text" name="email_address" onChange={this.updateDetails}/>
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
          </label>
          <label className="column is-6 label is-large has-text-centered">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
          </label>
        </div> */}