import React from 'react'

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
        this.setState({value: event.target.value})
    }

    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    refreshForm(){
        this.setState({            
        })
        this.render()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Person involved:<input type="text" name="person_involved" onChange={this.handleChange} /></label><br />
                <label>Incident type:<input type="text" name="inciden_type" onChange={this.handleChange} /></label><br />
                <label>Date & Time:<input type="text" name="date_time" onChange={this.handleChange} /></label><br />
                <label>Task:<input type="text" name="task" onChange={this.handleChange} /></label><br />
                <label>Other task:<input type="text" name="other_task" onChange={this.handleChange} /></label><br />
                <label>Incident:<input type="text" name="incident" onChange={this.handleChange} /></label><br />
                <label>Other incidident:<input type="text" name="other_incident" onChange={this.handleChange} /></label><br />
                <label>Location:<input type="text" name="location" onChange={this.handleChange} /></label><br />
                <label>First aid:<input type="text" name="first_aid" onChange={this.handleChange} /></label><br />
                <input type="submit" value="Submit" />
                {/* <button onClick={this.refreshForm}>Refresh</button> */}
            </form>
        )
    }
}
  
export default IncidentForm