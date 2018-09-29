import React from 'react'
import Header from './Header'
import SafetyMeetList from './SafetyMeetList'


class SafetyMeetContainer extends React.Component {
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
            <SafetyMeetList />
          </div>
        </div>
  ) 
}
}
 
export default SafetyMeetContainer