import React from "react"
import ColoredLine from "./colored_line"
import "../styles/_clinic_information.scss"
import ScrollReveal from 'scrollreveal'

import {Heartbeat, ClinicMedical, BriefcaseMedical, LongArrowAltRight} from 'styled-icons/fa-solid'
import {Schedule} from 'styled-icons/material'

class ClinicInformation extends React.Component {
	
	constructor(props) {
		super(props);
		this.options = {
			distance: '10%',
		    origin: 'bottom',
		    opacity: null
		};
	}

	render() {
		ScrollReveal().reveal('.information_format' , this.options);
		return(
			<div className = "content_wrap">
				<div className = "information_format">
					<div className = "services_columns">
						<div className = "items_format service_1">
							<div className = "data_tittle">
								<Heartbeat className = "icon_item"/>
									<h4 className = "element_tittle">
											CLINIC NEWS
									</h4>
							</div>
							<div className = "sc_services_item_content">
								<div className = "service_description">
									<p>Children can present a particular challenge in treatment. Departments</p>
								</div>
								<a href ="#" className = "service_description service_readmore">
									Details
									<LongArrowAltRight className = "details_icon"/>
								</a>
							</div>
						</div>
						<div className = "items_format service_2">
							<div className = "data_tittle">
								<ClinicMedical className = "icon_item"/>
									<h4 className = "element_tittle">
											OUR STAFF
									</h4>
							</div>
							<div className = "sc_services_item_content">
								<div className = "service_description">
									<p>Triage is normally the first stage the patient passes through, and consists of</p>
								</div>
								<a href ="#" className = "service_description service_readmore">
									Details
									<LongArrowAltRight className = "details_icon"/>
								</a>
							</div>
						</div>
						<div className = "items_format service_3">
							<div className = "data_tittle">
								<BriefcaseMedical className = "icon_item"/>
									<h4 className = "element_tittle">
											EMERGENCY CARE
									</h4>
							</div>
							<div className = "sc_services_item_content">
								<div className = "service_description">
									<p>The emergency departments operate 24 hours a day, although staffing may</p>
								</div>
								<a href ="#" className = "service_description service_readmore">
									Details
									<LongArrowAltRight className = "details_icon"/>
								</a>
							</div>
						</div>
						<div className = "items_format service_4">
							<div className = "data_tittle">
								<Schedule className = "icon_item"/>
									<h4 className = "element_tittle">
											CLINIC NEWS
									</h4>
							</div>
							<div className = "sc_services_item_content">
								<div className = "service_description">
									<p>Monday-Friday     8.00 – 23.00
									Saturday                8.00 – 20.00
									Sunday                   8.00 – 18.00</p>
								</div>
								<a href ="#" className = "service_description service_readmore">
									Details
									<LongArrowAltRight className = "details_icon"/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<ColoredLine/>
			</div>
		);
	}
}

export default ClinicInformation