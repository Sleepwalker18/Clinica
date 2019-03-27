import React from "react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/_carousel_staff.scss"

class OpinionsCarousel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div className = "bg_staff">
                	<div className = "staff_container">
	                	<div className = "staff">
	                		<h1>Our Staff</h1>
	                		<h6>Meet the team</h6>
	                		<div className = "personal">
	                			<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/07/additional_post_1-390x390.jpg" className = "staff_image"/>
	                		</div>
	                		<div className = "personal_data">
	                			<a>Dr. Michael Doe</a>
	                			<span>Senior Doctor</span>
	                		</div>
	                	</div>
	                </div>
                </div>
                <div className = "bg_staff">
                	<div className = "staff_container">
	                	<div className = "staff">
	                		<h1>Our Staff</h1>
	                		<h6>Meet the team</h6>
	                		<div className = "personal">
	                			<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_28124313_original-390x390.jpg" className = "staff_image"/>
	                		</div>
	                		<div className = "personal_data">
	                			<a>Dr. Julie Smith</a>
	                			<span>Physician</span>
	                		</div>
	                	</div>
	                </div>
                </div>
                <div className = "bg_staff">
                	<div className = "staff_container">
	                	<div className = "staff">
	                		<h1>Our Staff</h1>
	                		<h6>Meet the team</h6>
	                		<div className = "personal">
	                			<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/07/Depositphotos_13909653_original-390x390.jpg" className = "staff_image"/>
	                		</div>
	                		<div className = "personal_data">
	                			<a>Dr. Joanne Simmons</a>
	                			<span>Podiatrist</span>
	                		</div>
	                	</div>
	                </div>
                </div>
                <div className = "bg_staff">
                	<div className = "staff_container">
	                	<div className = "staff">
	                		<h1>Our Staff</h1>
	                		<h6>Meet the team</h6>
	                		<div className = "personal">
	                			<img src="http://healthandcare.ancorathemes.com/wp-content/uploads/2015/07/bigstock-Mature-businessman-portrait-38741341-390x390.jpg" className = "staff_image"/>
	                		</div>
	                		<div className = "personal_data">
	                			<a>Dr. John Warner</a>
	                			<span>Physician</span>
	                		</div>
	                	</div>
	                </div>
                </div>
            </Carousel>
        );
    }
}

export default OpinionsCarousel