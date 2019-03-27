import React from "react"
import "../styles/_navbar.scss"

import {Menu} from 'styled-icons/material'
import {Search} from 'styled-icons/fa-solid'

class Navbar extends React.Component {

	constructor(props) {
		super(props);
    	this.state = {
    		isActive: false, 
    		searchForm: false,
    	};
    	this.changeState = this.changeState.bind(this);
    	this.searchState = this.searchState.bind(this);
    	this.menu = 'menu-active';
    	this.searchField = 'search-active';
    	this.searchColumn = 'new_width';
	}

	changeState() {
		this.setState(state => ({
			isActive: !state.isActive
		}));
		if(this.state.isActive) {
			this.menu = 'menu-active';
		}
		else {
			this.menu = '';
		}

	}

	searchState(){
		this.setState(state => ({
			searchForm: !state.searchForm
		}));
		if(this.state.searchForm) {
			this.searchField = 'search-active';
			this.searchColumn = 'new_width';
		}
		else {
			this.searchField = '';
			this.searchColumn = '';
		}
	}

	render(){
		return(
			<div className = {"contact_logo " + this.searchColumn}>
				<div className = "row_container_1">
					<div className = "column1">
						<div className = "logo">
							<a href = "http://healthandcare.ancorathemes.com/">
								<img src = "http://healthandcare.ancorathemes.com/wp-content/uploads/2015/09/logo_hospital.png" 
								className = "logo_main" alt="logo_hospital.png"></img>
								<div className = "logo_text">
									Health&Care
								</div>
							</a>
						</div>
					</div>
					<div className = "column2">
						<Menu className = "menu_main_responsive" onClick = {this.changeState}/>
					</div>
					<div className = "column3">
						<form className = "search_form">
							<Search className = "search_icon" onClick = {this.searchState}/>
							<input type = "text" className = {"search_field " + this.searchField} placeholder = "Search"/>
						</form>
					</div>
				</div>
				<div className = {"row_container_2 " + this.menu} >
					<div className = "menu_area">
						<nav className = "menu-items">
							<ul className = "top_panel_wrap">
								<li className = "menu-item">
									<a>Home</a>
									<ul className = "sub-menu">
										<li>Home</li>
										<li>Home Boxed</li>
									</ul>
								</li>
								<li className = "menu-item">
									<a>Blog</a>
									<ul className = "sub-menu">
										<li>Blog with sidebar</li>
										<li>Blog without sidebar</li>
										<li>Masonry</li>
										<li>Portfolio</li>
										<li>Single post formats</li>
									</ul>
								</li>
								<li className = "menu-item">
									<a>Features</a>
									<ul className = "sub-menu">
										<li>Typography</li>
										<li>Shortcodes</li>
										<li>Calculated from fields</li>
									</ul>
								</li>
								<li className = "menu-item">
									<a>Team</a>
									<ul className = "sub-menu">
										<li>Departments</li>
										<li>Dr. John Warner</li>
									</ul>
								</li>
								<li className = "menu-item">
									<a>Appointments</a>
								</li>
								<li className = "menu-item">
									<a>Gallery</a>
									<ul className = "sub-menu">
										<li>Grid</li>
										<li>Masonry</li>
										<li>Cobbies</li>
									</ul>
								</li>
								<li className = "menu-item">
									<a>Shop</a>
								</li>
								<li className = "menu-item">
									<a>Contacts</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>			
		);
	}
}

export default Navbar
