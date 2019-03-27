import React from "react"
import "../styles/_footer_banner.scss"

import {LongArrowAltRight, PaperPlane, Hospital} from 'styled-icons/fa-solid'
import {Map} from 'styled-icons/boxicons-solid'

const FooterBanner = () => (

	<div className = "content_wrap">
		<div className = "banner_container">
			<div className = "banner_content">
				<div className = "banner_tittle">
					<h1>HEALTH INSURANCE</h1>
					<p>Medicenter with individual approach</p>
					<a href="#" className = "sc_link area_link">
						More info
						<LongArrowAltRight className = "info_icon"/>
					</a>
				</div>
			</div>
			<div className = "banner_contact">
				<div className = "contact_address">
					<Hospital className = "address_icon"/>
					<p>600 E 77TH ST<br/>
					NEW YORK, NEW YORK 10075</p>
					<PaperPlane className = "address_icon"/>
					<p className = "address_link">INFO@ANCORA.COM</p>
					<a className = "sc_link area_link">
						<Map className = "info_icon"/>
						Get directions on Google Maps
						<LongArrowAltRight className = "info_icon"/>
					</a>
				</div>
			</div>
			<div className = "map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12789.9925379686!2d-100.99501276697477!3d22.19305525700981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a9f7502306919%3A0xd95231c610e540f!2sSauzalito+5ta+Secc%2C+San+Luis%2C+S.L.P.!5e0!3m2!1ses-419!2smx!4v1553156278998"></iframe>
			</div>
		</div>
	</div>

)

export default FooterBanner