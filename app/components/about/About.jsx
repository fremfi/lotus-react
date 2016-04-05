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
	      			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia omnis suscipit recusandae molestiae, 
	      			rem ipsum quia explicabo ea voluptates sequi pariatur asperiores aliquid tempore provident in corporis, 
	      			itaque, exercitationem, quasi.
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