import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'
import BackgroundImage from './BackgroundImage';


class Landing extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    I am a landing page
                </h1>
                <CSSTransitionGroup
                    transitionName="background"
                    transitionAppear={true}
                    transitionAppearTimeout={3000}
                    transitionEnterTimeout={3000}
                    transitionLeaveTimeout={3000}
                    >
                    <BackgroundImage />

                    {/* transitionName = {{
                        enter: 'enter',
                        enterActive: '',
                        leave: 'leave',
                        leaveActive: 'leaveActive',
                    }} */}
                </CSSTransitionGroup>
            </div>
        )
    }
}

// class App extends React.Component   {
//     render()    {
        
//     }
// }





// )    

export default Landing 