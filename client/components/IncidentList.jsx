import React from 'react'
import {getIncidents} from '../utils/apiclient.js'


export default class IncidentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            incidents: [],
            errorMessage: ''
        }
        this.fetchIncidents = this.fetchIncidents.bind(this)
    }
    
    componentDidMount() {
        this.fetchIncidents()
    }

    fetchIncidents () {
        getIncidents()
        .then(incidents => {
            this.setState({incidents: incidents})
        })
        .catch(err => {
            this.setState({errorMessage: err.message})
       })
    }

    render() {
        console.log('render', this.state.incidents.length)
        console.log()
        
      return (
        <div>
            {
                this.state.incidents.length > 0 &&this.state.incidents.map((incident) => {
                    return (
                    <div>
                        <p>Person involved: {incident.person_involved}</p>
                        <p>Incident type: {incident.incident_type}</p>
                        <p>Date and time of incident: {incident.date_time}</p>
                        <p>Task: {incident.task}</p>
                        <p>Other task: {incident.other_task}</p>
                        <p>Incident: {incident.incident}</p>
                        <p>Other incident: {incident.other_incident}</p>
                        <p>Location: {incident.location}</p>
                        <p>First aid: {incident.first_aid}</p>
                        <br />
                        <hr />
                    </div>
                    )    
        })
        }
        </div>
    )}
}