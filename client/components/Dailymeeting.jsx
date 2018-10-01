import React from 'react'
import Header from './Header'
import HazardForm from './HazardForm'


class Dailymeeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return ( 
        <div>
          <div>
            <Header />
            <hr />
          </div>
          <div>
            <HazardForm {...this.props} />
          </div>
        </div>
  ) 
}
}
 
export default Dailymeeting