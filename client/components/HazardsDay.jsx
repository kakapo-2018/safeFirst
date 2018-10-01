import React from 'react'
import {getHazards} from '../utils/apiclient.js'

export default class HazardsDay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hazards: [],
            errorMessage: ''
        }
        this.fetchHazards = this.fetchHazards.bind(this)
    }
    
    componentDidMount() {
        this.fetchHazards()
    }

    fetchHazards () {
        getHazards()
        .then(hazards => {
            this.setState({hazards: hazards})
        })
        .catch(err => {
            this.setState({errorMessage: err.message})
       })
    }

    render() {
        console.log('render', this.state.hazards.length)
        console.log()
        
      return (
        <div>
            {
                this.state.hazards.length > 0 &&this.state.hazards.map((hazard) => {
                    return (
                    <div key={hazard.id}>
                        <p>Hazard: {hazard.hazard}</p>
                        <p>Risk: {hazard.risk}</p>
                        <p>Control: {hazard.control}</p>
                        <p>Date: {hazard.date}</p>
                        <br />
                        <hr />
                    </div>
                    )    
        })
        }
        </div>
    )}

}

