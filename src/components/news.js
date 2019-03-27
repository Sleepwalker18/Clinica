import React from "react"
import "../styles/_news.scss"
import ScrollReveal from 'scrollreveal'

import {LongArrowAltRight, ClinicMedical} from 'styled-icons/fa-solid'

class News extends React.Component {

	constructor(props) {
		super(props);
		this.options = {
			distance: '10%',
		    origin: 'bottom',
		    opacity: null
		};
	}

	render() {
		ScrollReveal().reveal('.news_container' , this.options);
		return(
			<div className = "content_wrap">
				<div className = "news_container">
					<div className = "news_tittle_container">
						<h1 className = "news_tittle">LATEST NEWS</h1>
						<h6 className = "news_tittle_regular">Because we care</h6>
					</div>
					<div className = "news_format">
						<div className = "technology_post">
							<div className = "technology_image">
								<img className = "img_post" src = "http://healthandcare.ancorathemes.com/wp-content/uploads/2015/05/bigstock-Colour-wheels-as-symbols-of-en-34342934-300x300.jpg"/>
							</div>
							<div className = "post_content">
								<h4 className = "post_tittle">
									<a href = "#" className = "post_link">
										TODAY'S TECHNOLOGY AT MEDICAL SERVICE
									</a>
								</h4>
								<div className = "post_categories">
									<a href = "#" className = "category_link">
										Blog without Sidebar
									</a>,
									<a href = "#" className = "category_link">
										Hospital
									</a>,
									<a href = "#" className = "category_link">
										Latest news
									</a>,
									<a href = "#" className = "category_link">
										Masonry 2 Columns
									</a>,
									<a href = "#" className = "category_link">
										Masonry 3 Columns
									</a>,
									<a href = "#" className = "category_link">
										Portfolio 3 Columns
									</a>
								</div>
								<div className = "post_description">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. 
									Morbi felis orci, lacinia a velit et, sodales condimentum metus. Nulla non fermentum nisl. 
									Maecenas id molestie turpis, sit amet feugiat lorem. Curabitur sed erat vel tellus hendrerit tincidunt. 
									Sed arcu tortor, sollicitudin ac lectus sed, rhoncus iaculis lectus. Ut efficitur feugiat enim </p>
								</div>
								<div className = "area_button">
									<a href="#" className = "sc_link post_button">
										LEARN MORE
										<LongArrowAltRight className = "info_icon"/>
									</a>
								</div>
							</div>
						</div>
						<div className = "injury_post">
							<div className = "technology_image">
								<img className = "img_post" src = "http://healthandcare.ancorathemes.com/wp-content/uploads/2015/06/Depositphotos_13909453_original-300x300.jpg"/>
							</div>
							<div className = "post_content">
								<h4 className = "post_tittle">
									<a href = "#" className = "post_link">
										RISK OF ACUTE KIDNEY INJURY
									</a>
								</h4>
								<div className = "post_categories">
									<a href = "#" className = "category_link">
										Blog without Sidebar
									</a>,
									<a href = "#" className = "category_link">
										Latest news
									</a>,
									<a href = "#" className = "category_link">
										Masonry 2 Columns
									</a>,
									<a href = "#" className = "category_link">
										Masonry 3 Columns
									</a>
								</div>
								<div className = "post_description">
									<p>Japanese giant Nissan has unveiled the world’s 
									first nanopaint technology that stops a car getting dirty.</p>
								</div>
								<div className = "buttons_format">
									<a href="#" className = "sc_link post_button">
										LEARN MORE
										<LongArrowAltRight className = "info_icon"/>
									</a>
								</div>
								<div className = "buttons_format news_button">
									<a href="#" className = "sc_link">
										View More
										<LongArrowAltRight className = "info_icon"/>
									</a>
								</div>
							</div>
						</div>
						<div className = "contact_form">
							<div className = "items_format service_2">
								<div className = "data_tittle">
									<ClinicMedical className = "icon_item"/>
									<h3 className = "element_tittle">
										FREE CONSULTATION
									</h3>
								</div>
							<div className = "form_container">
								<form className = "form_item">
									<div className = "form_data_1">
										<div className = "sc_contact_form">
											<input type = "text" placeholder = "Name" className = "contact_item"/>
										</div>
										<div className = "sc_contact_form">
											<input type = "text" placeholder = "Phone" className = "contact_item"/>
										</div>
									</div>
									<div className = "form_data_2">
										<div className = "sc_contact_form_2">
											<input type = "text" placeholder = "Last Name" className = "contact_item"/>
										</div>
										<div className = "sc_contact_form_2">
											<input type = "text" placeholder = "E-mail" className = "contact_item"/>
										</div>
									</div>
									<div className = "form_data_3">
										<div className = "sc_contact_form_2">
											<select name = "Selec Department" className = "contact_item">
												<option value = "1">
													Select Department
												</option>
												<option value = "2">
													Physiotherapy
												</option>
												<option value = "3">
													Gynecology
												</option>
											</select>
										</div>
										<div className = "sc_contact_form_2">
											<textarea name = "Message" className = "contact_item" placeholder = "Message">
											</textarea>
										</div>
										<div className = "sc_contact_form_2">
											<div className = "sc_form_checkbox">
												<input type = "checkbox"/>
												<label for = "i_agree_privacy_policy_sc_form_custom">
													I agree that my submitted data is being collected and stored. 
													For further details on handling user data, see our
													<a href = "#" className = "category_link"> Privacy Policy</a>
												</label>
											</div>
											<div className = "form_button">
												<a href="#" className = "sc_link form_send">
													SEND
													<LongArrowAltRight className = "info_icon"/>
												</a>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default News