import React from 'react'
//import {connect} from 'react-redux'
import {getHazards} from '../utils/apiclient'


class HazardForm extends React.Component    {
    constructor(props)  {
        super(props)
        this.state = {
            Hazard: '',
            Risk: '',
            Control: '',
            Date: ''
        } 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.refreshForm = this.refreshForm.bind(this)
        }
    


    onSubmit(evt)  {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit(evt)  {
        evt.preventDefault()
        getHazards(this.state)
        console.log(this.state)
    }

    refreshForm()   {
        this.setState({
        })
        this.render()
    }

    render()    {
        return  (
            <form onSubmit={this.handleSubmit}>
                <label className = "label">Hazard:
                <input className="input" type="text" name="Hazard" onchange={this.onSubmit}>
                </input>
                </label>
                <br></br>
                
                <label className = "label">Risk:
                <input className="input" type="text" name="Risk" onchange={this.onSubmit}>
                </input>
                </label>
                <br></br>

                <label className = "label">Control:
                <input className="input" type="text" name="Control" onchange={this.onSubmit}>
                </input>
                </label>
                <br></br>
                
                <label className = "label">Date:
                <input className="input" type="text" name="Date" onchange={this.onSubmit}>
                </input>
                </label>
                <br></br>
                
                <input className="button" type="submit" name="Add">
                </input>
            </form>
        ) 
    }
}

    
export default HazardForm
