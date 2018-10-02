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
    handleAdd() {
        const newItems = this.state.items.concat([
        prompt('image')
        ]);
        this.setState({image: changeImage});
    }

    handleRemove(i) {
        let changeImage = this.state.items.slice();
        newImage.splice(i, 1);
        this.setState({image: changeImage});
    }


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
                    transitionName = {{
                        enter: 'enter',
                        enterActive: 'EnterActive',
                        leave: 'leave',
                        leaveActive: 'leaveActive',
                    }} 
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Landing 