import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'


class BackgroundImage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            images: ["/images/3-Reasons-Workplace-Hazards-Go-Unreported.jpg", "/images/20121003_st_johns_mg_3542.jpg"],
            currentImageIndex: 0,
            // isToggleOn: false
        }

        this.changeImage = this.changeImage.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        window.setInterval(this.changeImage, 4000)
    }

    // handleClick()   {
    //     this.setState(state => ( {
    //         isToggleOn: !state.isToggleOn,
    //         CSSTransitionGroup: EnterActive 
    //     }));
    // }

    changeImage() {
            console.log('Changing image')
            this.setState({
            currentImageIndex: this.state.currentImageIndex != 0 ? 0 : 1
        })
    }



    render() {
        // {console.log(this.state.images)}
        return (
            <div>
                {this.state.images.map(image => {
                    return (
                        <img key={image} src={{image}}/>
                    
                )}
                )
                    }
            </div>
            )
        }
}    


export default BackgroundImage 