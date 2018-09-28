import React from 'react'

class HazardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            crew: '',
            hazard: '',
            risk: 1,
            control: ''
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
            
        )
    }
}

const HazardForm = (props) => (
        <div>
            <h1>
                I am a Hazard Form
            </h1>
        </div>

)


    
export default HazardForm