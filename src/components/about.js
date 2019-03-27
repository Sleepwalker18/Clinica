import React from "react"
import "../styles/_about.scss"

import {Heartbeat, LongArrowAltRight} from 'styled-icons/fa-solid'

const About = () => (
	<div className = "content_wrap">
		<div className = "about_format">
			<div className = "content_columns">
				<div className = "column_content_1">
					<Heartbeat className = "icon_tittle"/>
					<h1 className = "sc_title ">WELCOME TO OUR CLINIC
						<h6 className = "sc_title_regular">Because we care</h6>
					</h1>
				</div>
				<div className = "column_content_2">
					<div className = "wbp_wrapper">
						<p className = "introduction_text">Clinics are often associated with a general medical practice, run by one or several general practitioners 
						or clinics are usually operated by physiotherapists and psychology clinics by clinical psychologists, 
						and so on for each health profession.</p>
						<div className = "sc_button">
							<a href="#" className = "sc_link">
								More Info
								<LongArrowAltRight className = "info_icon"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default About