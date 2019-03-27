import React from "react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/_carousel_opinions.scss"

class OpinionsCarousel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div className = "bg_elements">
                	<div className = "opinion_container">
	                	<div className = "opinion">
	                		<p>"It is nice when you get not just a quality product, but also premium support guarantee."</p>
	                		<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/07/img_chat_man.png" className = "opinion_image"/>
	                		<span>Alan Green</span>
	                	</div>
	                </div>
                </div>
                <div className = "bg_elements">
                	<div className = "opinion_container">
	                	<div className = "opinion">
	                		<p>"Wonderful design that strucks with its simplicity and functionality. Great job!"</p>
	                		<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/06/img_testimonials_Gloria.png" className = "opinion_image"/>
	                		<span>Gloria Priston</span>
	                	</div>
	                </div>
                </div>
                <div className = "bg_elements">
                	<div className = "opinion_container">
	                	<div className = "opinion">
	                		<p>"Thank you guys! Without your help my website would never look as nice and unique as it does now."</p>
	                		<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/07/img_chat_girl.png" className = "opinion_image"/>
	                		<span>Janice Lee</span>
	                	</div>
	                </div>
                </div>
            </Carousel>
        );
    }
}

export default OpinionsCarousel