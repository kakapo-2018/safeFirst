import React from 'react'
import Header from './Header'

import { CSSTransitionGroup } from 'react-transition-group'
import BackgroundImage from './BackgroundImage';


class Landing extends React.Component {
    constructor(props) {
        super(props)
    }       

// const Landing = (props) => (
//     <div>
//         <h1>
//             I am a landing page
//         </h1>
//     </div>

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
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