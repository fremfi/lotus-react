import React from 'react';

class About extends React.Component{
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h2>ABOUT ME</h2>
				<p>
	      	Frederick is an advocate for good design with an eye for details. He enjoys getting his hands dirty with front end technologies, creating beautiful experiences online, and reading books on human psychology, design & business. 
	      	When Frederick is not punching out code, he is out taking photos of beautiful models, playing basketball, exercising, meditating or out and about socializing and building communities.	
	      </p>
				<div className="row">
			      	<div className="col s4">
			      		<h5>PHOTOGRAPHY</h5>
			      		<p>
			      			Photography is an outlet where Frederick uses the fundamental elements of design to capture scenes 
			      			and moments that will live forever. The idea of being able to control color and light to set 
			      			the tone/mood of an image is what intrigues him the most. His photography work has been featured 
			      			in Bisous Magazine, Elegant Magazine, Flawless Magazine, HUF Magazine, KIKAPU and several other 
			      			international publications.
			      		</p>
			      	</div>
			      	<div className="col s4">
			      		<h5>DESIGN</h5>
			      		<p>
			      			Frederick Mfinanga creates top-notch graphic designs adhering to UX best practices and by studying results 
			      			with measurable analytics.
			      		</p>
			      	</div>
			      	<div className="col s4">
			      		<h5>DEVELOPER</h5>
			      		<p>
			      			No user is left behind. Fredericks websites work across all devices. Each is optimally designed for desktop, tablet, and mobile.
			      		</p>
			      	</div>
			    </div>
			</div>
		);
	}
}

export default About;