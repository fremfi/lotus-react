import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
		    <nav>
	        	<div className="nav-wrapper">
	          		<a href="#" className="brand-logo"></a>
	          		<ul id="nav-mobile" className="right hide-on-med-and-down">
	          			<li><Link to="discover">Discover</Link></li>
	            		<li><Link to="about">Bio</Link></li>
	            		<li><Link to="/">Contact</Link></li>
	          		</ul>
	        	</div>
	      	</nav>
		);
	}
}

export default Nav;