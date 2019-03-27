import React from "react"
import ColoredLine from "./colored_line"
import "../styles/_service_areas.scss"
import ScrollReveal from 'scrollreveal'

import {InputChecked} from 'styled-icons/typicons'
import {LongArrowAltRight} from 'styled-icons/fa-solid'

class ServiceAreas extends React.Component {

	constructor(props) {
		super(props);
		this.options = {
			distance: '10%',
		    origin: 'bottom',
		    opacity: null
		};
	}

	render() {
		ScrollReveal().reveal('.sa_container' , this.options);
		return(
			<div className = "content_wrap">
				<div className = "sa_container">
					<div className = "sa_tittle_container">
						<h1 className = "sa_tittle"> SERVICE AREAS </h1>
						<h6 className = "sa_tittle_regular">How we can help</h6>
					</div>
					<div className = "sa_format">
						<div className = "services_area_1">
							<ul className = "sa_list_format">
								<li>
									<InputChecked className = "sa_item_icon"/>
									Adolescent Health
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Allergy and Immunology
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Alzheimer's Disease
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Ambulatory Care
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Breast Health
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Cancer - Oncology
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Children: Kravis Children's Hospital
								</li>
							</ul>
						</div>
						<div className = "services_area_2">
							<ul className = "sa_list_format">
								<li>
									<InputChecked className = "sa_item_icon"/>
									Dentistry and Oral Surgery
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Dermatology
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Diabetes
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Digestive Diseases
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Ear Nose and Throat
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Emergency Medicine
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Environmental Medicine
								</li>
							</ul>
						</div>
						<div className = "services_area_3">
							<ul className = "sa_list_format">
								<li>
									<InputChecked className = "sa_item_icon"/>
									Family & Community Medicine
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Genetics
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Geriatrics
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Heart - Cardiology
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Infectious Diseases
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									Infusion Therapy
								</li>
								<li>
									<InputChecked className = "sa_item_icon"/>
									International Services
								</li>
							</ul>
						</div>
					</div>
					<div className = "about_areas">
						<div className = "sc_button area_button">
							<a href="#" className = "sc_link">
								View More
								<LongArrowAltRight className = "info_icon"/>
							</a>
						</div>
						<div className = "sc_button area_button">
							<a href="#" className = "sc_link area_link">
								Service calculator
								<LongArrowAltRight className = "info_icon"/>
							</a>
						</div>
					</div>
				</div>
			<ColoredLine/>
			</div>
		);
	}
}

export default ServiceAreas