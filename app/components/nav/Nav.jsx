import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
		    <nav>
	        	<div className="nav-wrapper teal lighten-4">
	          		<a href="#" className="brand-logo"></a>
	          		<ul id="nav-mobile" className="right hide-on-med-and-down">
	          			<li><Link to="discover" activeClassName="active">DISCOVER</Link></li>
	            		<li><IndexLink to="/" activeClassName="active">ABOUT</IndexLink></li>
	            		<li><Link to="contact" activeClassName="active">CONTACT</Link></li>
	          		</ul>
	        	</div>
	      	</nav>
		);
	}
}

export default Nav;