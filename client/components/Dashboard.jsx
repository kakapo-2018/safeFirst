import React from 'react'
import SafetyMeet from './SafetyMeet'
import HazardForm from './HazardForm'
import IncidentForm from './IncidentForm'
import HazardsDay from './HazardsDay'
import Header from './Header'

const Dashboard = (props) => (
        <div>
            <h1>

                I am a dashboard.

            </h1>
            <h2>
              <SafetyMeet />
             </h2>
            <h3>
              <HazardForm />
            </h3>
            <h4>
              <IncidentForm />
            </h4>
            <h5>
              <HazardsDay />
            </h5>
            <h6>
              <Header />
            </h6>
        </div>

)

/* code for 3 buttons (safety meeting - pre-start meeting - incident reporting)
<div class="field has-addons">
  <p class="control">
    <a class="button">
      <span class="icon is-small">
        <i class="fas fa-align-left"></i>
      </span>
      <span>Left</span>
    </a>
  </p>
  <p class="control">
    <a class="button">
      <span class="icon is-small">
        <i class="fas fa-align-center"></i>
      </span>
      <span>Center</span>
    </a>
  </p>
  <p class="control">
    <a class="button">
      <span class="icon is-small">
        <i class="fas fa-align-right"></i>
      </span>
      <span>Right</span>
    </a>
  </p>
</div>
*/
    
export default Dashboard