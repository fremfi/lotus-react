import React from 'react';

class About extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div className="about-content">
				<div className="row">
				  <div className="col l4">
						<h5>FREDERICK MFINANGA</h5>
						<h6><i>A software developer based in Montreal, who loves art & design</i></h6>
					</div>
				</div>
				<div className="row">
				  <div className="col l6">
					  <p>
					  	Frederick is an advocate for good design with an eye for details. He enjoys getting his hands dirty with front end 
					  	technologies, creating beautiful experiences online, and reading books on human psychology, design & business. 
					  	When Frederick is not punching out code, he is out taking photos of beautiful models, playing basketball, 
					  	exercising, meditating or out and about travelling to exotic places, 
					  	socializing and building communities.
					  </p>
					  <a className="waves-effect waves-light btn-large" href="#/contact">GET IN TOUCH</a>
			  	</div>
			  </div>
			</div>
		);
	}
}

export default About;