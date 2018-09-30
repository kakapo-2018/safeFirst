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
            <h1>Safety Meeting</h1>
                <div class="field">
                    <label class="label">Date - Time:   </label>
                        <  input class="input" type="text" name="date_time" onChange={this.handleChange} />
                </div>
                <div class="field">
                    <label class="label">ID:   </label>
                        <  input class="input" type="text" name="id" onChange={this.handleChange} />
                </div>
                <div class="field">
                    <label class="label">Location:   </label>
                        <  input class="input" type="text" name="location" onChange={this.handleChange} />
                </div>
                <div class="field">
                    <label class="label">Discussion:</label>
                    <p>Health & Safety concerns, training needs, incidents/accident trends, personal   </p>
                        <div class="control">
                            <textarea class="textarea" name="issues" rows="15" onChange={this.handleChange}></textarea>
                        </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-text">Cancel</button>
                    </div>
                </div>




                

            {/* <label>Date:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
                <label>
                    Attendees:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label> */}

                {/* <label>
                <br/>
                <Link to="/hsmeetinglist" className={'navoptions'}>List with all Safety Meetings notes</Link>
                <hr />
                </label> */}
            </form>
        )
    }
}


export default SafetyMeet



