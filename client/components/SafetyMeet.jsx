import React from 'react'
// import {Link} from 'react-router-dom'
import {newMinutes} from '../utils/apiclient'



class SafetyMeet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            date_time: '',
            location: '',
            issues: '',
            
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
        newMinutes(this.state)
        console.log(this.state) 

    }

    refreshForm() {
        this.setState({})
        this.render()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="block">
                <h1 className="title">H&S meeting minutes</h1>
                    <p className="content">
                    Enter the notes of your periodic Health and Safety Meeting in the below form.<br />
                    </p>
                </div>
                <div className="column is-left">
                        <div className="column is-two-fifths">
                            <label className="label">Date:</label>
                                <input className="input" type="date" name="date_time" onChange={this.handleChange} />
                        </div> 
                        <div className="column is-two-fifths">
                            <label className="label">Location:   </label>
                                <input className="input" type="text" name="location" onChange={this.handleChange} />
                        </div>
                        <div className="column is-two-thirds">
                            <label className="label">Discussion:</label>
                                <div className="control">
                                    <textarea className="textarea" name="issues" placeholder="Attendees, Health & Safety concerns, training needs, incidents/accident trends, personal concerns " rows="10" onChange={this.handleChange}></textarea>
                                </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link" className="button is-success">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-link" className="button is-danger">Cancel</button>
                            </div>
                        </div>
                    </div>
            </form>
        )
    }
}


export default SafetyMeet



