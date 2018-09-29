import React from 'react'


class HazardsDay extends React.Component    {
    constructor(props)  {
        super(props)
        this.state = {value: } 
        this.handleSubmit = this.onSubmit.bind(this);
        }
    }

onsubmit()  {
    e.preventDefault()
    console.log(this.state);
}

render()    {
    return  (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Hazard:
            <input className="input" type="text" name="Hazard">
            </input>
            </label>

            <label>Risk:
            <input className="input" type="text" name="Risk">
            </input>
            </label>

            <label>Control:
            <input className="input" type="text" name="Control">
            </input>
            </label>
            
            <label>Date:
            <input className="input" type="text" name="Date">
            </input>
            </label>
            
            <input className="button" type="submit" name="Add">
            </input>
        </form>
    ) 
}

)
    
export default HazardsDay
