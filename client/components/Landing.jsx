import React from 'react'
import Header from './Header'

<<<<<<< HEAD
import { CSSTransitionGroup } from 'react-transition-group'
import BackgroundImage from './BackgroundImage';
=======
class Landing extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}
// const Landing = (props) => (
//     <div>
//         <h1>
//             I am a landing page
//         </h1>
//     </div>
// )    
>>>>>>> 2c753710e4d9f671647fa4037bcc682b825f986b


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