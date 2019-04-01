import React from "react"
import "../styles/_navbar.scss"

import {Menu} from 'styled-icons/material'
import {Search} from 'styled-icons/fa-solid'
import NavItem from './nav_item'

class Navbar extends React.Component {

	constructor(props) {
		super(props);
    	this.state = {
    		search: 'search-active',
    		searchColumn: 'new_width',
    		menu: 'menu-active',
    	};
    	this.changeState = this.changeState.bind(this);
    	this.searchState = this.searchState.bind(this);
	}

	changeState() {
		var navbarState;
		navbarState = this.state.menu === 'menu-active' ? '' : 'menu-active';
		this.setState(state => ({
			menu: navbarState
		}));
	}

	searchState() {
		var searchState, searchWidth;
		searchState = this.state.search === 'search-active' ? '' : 'search-active';
		searchWidth = this.state.searchColumn === 'new_width' ? '' : 'new_width';
		this.setState(state => ({
			search: searchState,
			searchColumn: searchWidth
		}));
	}

	render(){

		var arrayItems = {
    		one: {
    			tittle: 'Home',
    			list: [
    				'Home',
    				'Home Boxed'
    			]
    		},
    		two: {
    			tittle: 'Blog',
    			list: [
    				'Blog with sidebar', 
    				'Blog without sidebar', 
    				'Masonry',
    				'Portfolio',
    				'Single post formats'
    			]
    		},
    		three: {
    			tittle: 'Features',
    			list: [
    				'Typography',
					'Shortcodes',
					'Calculated from fields'
    			]
    		},
    		four: {
    			tittle: 'Team',
    			list: [
					'Departments',
					'Dr. John Warner'
				]
    		},
    		five: {
    			tittle: 'Appointments',
    		},
    		six: {
    			tittle: 'Gallery',
    			list: [
    				'Grid',
					'Masonry',
					'Cobbies'
    			]
    		},
    		seven: {
    			tittle: 'Shop',
    		},
    		eight: {
    			tittle: 'Contacts',
    		}
    	};

		return(
			<div className = {"contact_logo " + this.state.searchColumn}>
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
							<input type = "text" className = {"search_field " + this.state.search} placeholder = "Search"/>
						</form>
					</div>
				</div>
				<div className = {"row_container_2 " + this.state.menu} >
					<div className = "menu_area">
						<nav className = "menu-items">
							<ul className = "top_panel_wrap">
								<NavItem items = {arrayItems.one}/>
								<NavItem items = {arrayItems.two}/>
								<NavItem items = {arrayItems.three}/>
								<NavItem items = {arrayItems.four}/>
								<NavItem items = {arrayItems.five}/>
								<NavItem items = {arrayItems.six}/>
								<NavItem items = {arrayItems.seven}/>
								<NavItem items = {arrayItems.eight}/>
							</ul>
						</nav>
					</div>
				</div>
			</div>			
		);
	}
}

export default Navbar
