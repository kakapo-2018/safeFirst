import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <div>
          <h1>safeFirst</h1>  
               <div> 
                  <h3><Link to="/dashboard" className={'navoptions'}>Home</Link></h3>
                  <h3><Link to="/dailymeeting" className={'navoptions'}>Daily Meeting</Link></h3>
                  <h3><Link to="/hsmeeting" className={'navoptions'}>H&S Meeting</Link></h3>
                  <h3><Link to="/incidents" className={'navoptions'}>Incidents</Link></h3>
                </div> 
      </div>           
    )
}

export default Header