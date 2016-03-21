import './app.scss';
import $ from 'jquery';
import React from 'react';
import Nav from './nav/Nav';

class App extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Nav></Nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;