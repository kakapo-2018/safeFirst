import React from 'react'
import {getHazards} from '../utils/apiclient.js'
import moment from 'moment'

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

        const today = moment(new Date()).format('dddd Do MMMM')
        
        // const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        // document.write(utc);


      return (
        <div>
            <div className="block">
                <h1 className="title">Hazards for  {today} </h1>
                    </div>
                        <div className="block">
                            <table className="table is-striped is-hoverable is-fullwidth">
                                <thead>
                                    <tr>
                                        <th>Hazard</th>
                                        <th>Risk</th>
                                        <th>Control</th>
                                    </tr>
                                </thead>
                                    {
                                    this.state.hazards.length > 0 &&this.state.hazards.map((hazard) => {
                                    return (
                                    <tbody>
                                        <td>{hazard.hazard}</td>
                                        <td>{hazard.risk}</td>
                                        <td>{hazard.control}</td>
                                    </tbody>
                                    )    
                                })
                             }
                            </table>
                        </div>
                    </div>
                )}
            }

