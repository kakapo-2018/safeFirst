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
            <h1>Safety Meeting</h1>
                <div class="field">
                    <label class="label">Date - Time:   </label>
                        <  input class="input" type="text" value={this.state.value} />
                </div>
                <div class="field">
                    <label class="label">Attendees:   </label>
                        <  input class="input" type="text" value={this.state.value} />
                </div>
                <div class="field">
                    <label class="label">Location:   </label>
                        <  input class="input" type="text" value={this.state.value} />
                </div>
                <div class="field">
                    <label class="label">Discussion:</label>
                    <p>Health & Safety concerns, training needs, incidents/accident trends, personal   </p>
                        <div class="control">
                            <textarea class="textarea" rows="15" column="100" value={this.state.value}></textarea>
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
                <lable>
                    Attendees:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </lable> */}

                <lable>
                <br/>
                <Link to="/hsmeetinglist" className={'navoptions'}>List with all Safety Meetings notes</Link>
                <hr />
                </lable>
            </form>
        )
    }
}


export default SafetyMeet



