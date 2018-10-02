import React from 'react'
import Header from './Header'
<<<<<<< HEAD

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
=======
import { CSSTransitionGroup } from 'react-transition-group'
import BackgroundImage from './BackgroundImage';


>>>>>>> 26bd4757e0913b9820d491b10b39c69fae3a9d4f

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

export default Landing 