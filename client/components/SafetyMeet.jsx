import React from 'react'
import {Link} from 'react-router-dom'



class SafetyMeet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.name})
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <lable>
                    Attendees:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </lable>
                <br/>
                <Link to="/hsmeetinglist" className={'navoptions'}>List with all Safety Meetings notes</Link>
                <hr />
            </form>
        )
    }
}


export default SafetyMeet



