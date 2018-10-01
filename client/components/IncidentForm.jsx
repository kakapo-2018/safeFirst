import React from 'react'
import {newIncident} from '../utils/apiclient'
//import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'

class IncidentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person_involved: '',
            incident_type: '',
            date_time: '',
            task: '',
            other_task: '',
            incident: '',
            other_incident: '',
            location: '',
            first_aid: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.refreshForm = this.refreshForm.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    
    handleSubmit(event) {
        event.preventDefault()
        newIncident(this.state)
        console.log(this.state)
    }

    refreshForm(){
        this.setState({            
        })
        this.render()
    }



    render() {
        return (
            <div>
            <div className="block">
                <h1 className="title">Incident Form</h1>
                <p className="content">
                Please fill in this form to generate a new incident. <br />
                A full list of previously generated incidents can be found at the bottom of the page.
                </p>
            </div>
            <div className="block">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Person involved:</label>
                        <input className="input" type="text" name="person_involved" onChange={this.handleChange} />
                    </div>
                    <div className="control" >
                    <label className="label">Incident type:</label>
                        <div className="select" >
                            <select name="incident_type" onChange={this.handleChange}>
                                <option></option>
                                <option>Near miss</option>
                                <option>Injury</option>
                                <option>Accident</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Date:</label>
                        <input className="input" type="date" name="date_time" onChange={this.handleChange} />
                    </div> 
                    <div className="field">
                        <label className="label">Task:</label>
                        <input className="input" type="text" name="task" onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Other task:</label>
                        <input className="input" type="text" name="other_task" onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Incident:</label>
                        <input className="input" type="text" name="incident" onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Other incident:</label>
                        <input className="input" type="text" name="other_incident" onChange={this.handleChange} />
                    </div>
                    <div className="field">
                        <label className="label">Location:</label>
                        <input className="input" type="text" name="location" onChange={this.handleChange} />                    
                    </div>
                    {/* <div className="field">
                        <label className="label">First aid:</label>
                        <input className="input" type="text" name="first_aid" onChange={this.handleChange} />                    
                    </div> */}
                    <div className="control" >
                    <label className="label">First aid:</label>
                        <div className="select" >
                            <select name="first_aid" onChange={this.handleChange}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <input className="button is-info" type="submit" />
                </form>
            </div>
            </div>
        )
    }
}
  
export default IncidentForm