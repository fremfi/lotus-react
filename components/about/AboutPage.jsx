import React from 'react';
import Bio from './bio/bio';
import './about.scss';

class AboutPage extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="about-page-content">
				<Bio/>
			</div>
		);
	}
}

export default AboutPage;
