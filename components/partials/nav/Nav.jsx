import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component{
	constructor() {
		super();
	}

	componentDidMount() {
	    $(".button-collapse").sideNav();
	}

	render() {
		return (
		    <nav>
	        	<div className="nav-wrapper green lighten-5">
	          		<a href="#" className="brand-logo"></a>
	          		<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
	          		<ul className="right hide-on-med-and-down">
	            		<li><IndexLink to="/" activeClassName="active">ABOUT</IndexLink></li>
	            		<li><Link to="blog" activeClassName="active">BLOG</Link></li>
	          			<li><Link to="discover" activeClassName="active">DISCOVER</Link></li>
	            		<li><Link to="contact" activeClassName="active">CONTACT</Link></li>
	          		</ul>
	          		<ul className="side-nav" id="nav-mobile">
        		  		<li><IndexLink to="/" activeClassName="active">ABOUT</IndexLink></li>
        		  		<li><Link to="blog" activeClassName="active">BLOG</Link></li>
        					<li><Link to="discover" activeClassName="active">DISCOVER</Link></li>
        		  		<li><Link to="contact" activeClassName="active">CONTACT</Link></li>
	          		 </ul>
	        	</div>
	      	</nav>
		);
	}
}

export default Nav;