import React from 'react'


class HazardsDay extends React.Component    {
    constructor(props)  {
        super(props)
        this.state = {
            Hazard: '',
            Risk: '',
            Control: '',
            Date: ''
         } 
        this.handleSubmit = this.onSubmit.bind(this);
        this.onsubmit = this.onsubmit.bind(this); 
        }
        componentDidMount()
    }

handleSubmit();  {

}

onsubmit();  {
    e.preventDefault()
    console.log(this.state);
}

render();    {
    return  (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className = "label">Hazard:
            <input className="input" type="text" name="Hazard">
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
            
            <input className="button" type="submit" name="Add">
            </input>
        </form>
        </div>
    ) 
}

    
export default HazardsDay
