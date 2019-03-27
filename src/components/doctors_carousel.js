import React from "react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/_carousel_docs.scss"

class DoctorsCarousel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div className = "first_element">
                	<div className = "carousel_container">
                		<div className = "carousel_content">
		                	<div className = "tittle">
		                		<h1>BECAUSE WE CARE
		                			<h6>EMERGENCY CALL<a href = "#">(212) 434-2000</a></h6>
		                		</h1>
		                	</div>
		                	<div className = "area_button">
								<a href="#" className = "sc_link post_button">
									Make an Appointment
								</a>
							</div>
		               	</div>
	                </div>
                </div>
                <div className = "second_element">
                	<div className = "carousel_container">
                		<div className = "carousel_content">
		                	<div className = "tittle">
		                		<h1>EXCEPTIONAL SERVICE
		                			<h6>BECAUSE YOUR LIFE MATTERS</h6>
		                		</h1>
		                	</div>
		                	<div className = "area_button">
								<a href="#" className = "sc_link post_button">
									Make an Appointment
								</a>
							</div>
		               	</div>
	                </div>
                </div>
                <div className = "third_element">
                	<div className = "carousel_container">
                		<div className = "carousel_content">
		                	<div className = "tittle">
		                		<h1>MORE THAN 10,000 PEOPLE
		                			<h6>TRUSTED US WITH THEIR LIVES</h6>
		                		</h1>
		                	</div>
		                	<div className = "area_button">
								<a href="#" className = "sc_link post_button">
									Make an Appointment
								</a>
							</div>
		               	</div>
	                </div>
                </div>
            </Carousel>
        );
    }
}

export default DoctorsCarousel
