import React from "react"
import "../styles/_navbar.scss"

import {ArrowDownward} from 'styled-icons/material'
import {ArrowUpward} from 'styled-icons/material'

class NavItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			subActive: 'sub-menu',
			iconUp: 'menu-active',
			iconDown: ''
		};
		this.changeState = this.changeState.bind(this);
	}

	changeState() {
		var itemState, iconUp, iconDown;
		itemState = this.state.subActive === 'sub-menu' ? 'sub-menu sub-active' : 'sub-menu';
		iconUp = this.state.iconUp === 'menu-active' ? '' : 'menu-active';
		iconDown = this.state.iconDown === '' ? 'menu-active' : '';
		this.setState(state => ({
			subActive: itemState,
			iconUp: iconUp,
			iconDown: iconDown
		}));
	}

	render() {
		var tittle = this.props.items.tittle;
		if(this.props.items.list){
			var items = this.props.items.list.map(function (item, index){
	            return (
	            	<li key={index}>{item}</li>
	            );
	        });
	        var arrows = (
	        <>
		    	<ArrowDownward className = {"sub_menu_icon " + this.state.iconDown} onClick = {this.changeState}/>
				<ArrowUpward className = {"sub_menu_icon " + this.state.iconUp} onClick = {this.changeState}/>	        		
        	</>
        	);
		}



		return(
			<li className = "menu-item">
				<a>{tittle}</a>
				{arrows}
				<ul className = {this.state.subActive}>
					{items}
				</ul>	
			</li>
		);
	}
}

export default NavItem