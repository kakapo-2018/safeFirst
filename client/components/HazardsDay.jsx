import React from 'react'

const HazardsDay = (props) => (
    <div>
        <h1>
            I am daily pre-start meeting page
        </h1>
    </div>


class HazardsDay extends React.Component    {
    constructor(props)  {
        super(props)
        this.state = {
            
        }
    }
}

onsubmit()  {
    e.preventDefault()
    console.log(this.state);
}

render()    {
    return  (
        <form onSubmit={}>
            <input className="input" type="text" name="Hazard">
            </input>
            <input className="input" type="text" name="Risk">
            </input>
            <input className="input" type="text" name="Control">
            </input>
            <input className="input" type="text" name="Date">
            </input>
            <input className="button" type="submit">
            </input>
        </form>
    ) 
}
}
    
export default HazardsDay
