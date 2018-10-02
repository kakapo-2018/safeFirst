import React from 'react'

import { CSSTransitionGroup } from 'react-transition-group'


class BackgroundImage extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            images: ["/images/3-Reasons-Workplace-Hazards-Go-Unreported.jpg", "/images/20121003_st_johns_mg_3542.jpg"],
            currentImageIndex: 0
        }

        this.changeImage = this.changeImage.bind(this)
    }

    componentDidMount() {
        window.setInterval(this.changeImage, 4000)
    }

    changeImage() {
            console.log('Changing image')
            this.setState({
            currentImageIndex: this.state.currentImageIndex != 0 ? 0 : 1
        })
    }

    render() {
        {console.log(this.state.images)}
        return (
            <div>
                {this.state.images.map(image => {
                    return (
                        <img key={image} src={image} />
                    )
                })}
            </div>
        )
    }
}

export default BackgroundImage 