import React from 'react'
import {connect} from 'react-redux'
import {} from './'


class HazardForm extends React.Component    {
    constructor(props)  {
        super(props)
        this.state = {
            Hazard: '',
            Risk: '',
            Control: '',
            Date: ''
        } 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
        }
    }


    handleSubmit(evt)  {
        evt.preventDefault();
        //alert('Daily meeting hazard submitted: ' + this.state.value);
        this.props.dispatch(evt)
    }

    onSubmit(evt)  {
        evt.preventDefault();
        console.log(this.state);
        //this.setState({value: event.target.value});
    }

    refreshForm()   {
        this.setState({
        })
        this.render()
    }

render();    {
    return  (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className = "label">Hazard:
            <input className="input" type="text" name="Hazard"
            >
            </input>
            </label>

            <label className = "label">Risk:
            <input className="input" type="text" name="Risk">
            </input>
            </label>

            <label className = "label">Control:
            <input className="input" type="text" name="Control">
            </input>
            </label>
            
            <label className = "label">Date:
            <input className="input" type="text" name="Date">
            </input>
            </label>
            
            <input className="button" type="submit" name="Add" onclick={this.}>
            </input>
        </form>
        </div>
    ) 
}

    
export default HazardForm
