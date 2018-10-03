import React from 'react'
import Header from './Header'
import Slider from "react-slick";

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images:[
                "/images/fellingByPowerlines.jpg", 
                "/images/Forestry.jpg",
                "/images/planting.jpg",
            ],
                     
        }
    }       

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000
        }
        return (
           
            <div>
                 <div className="container">
                    <h1 className="title is-1">safeFirst</h1>
                </div>
                <Slider {...settings}>
                    {this.state.images.map(image => {
                        return (
                            <img key={image} src={image}/>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Landing 