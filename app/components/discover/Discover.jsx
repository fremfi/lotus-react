import React from 'react';
import Masonry from 'react-masonry-component';

class Discover extends React.Component{
	constructor() {
		super();
		this.state = { images: [1,2,3,4] };
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	//TODO: append 10 new images onscroll towards the end
	//stop appending when all images are loaded, return false?
	handleScroll() {
		this.setState({ images: [1,2,3,4,5,6,7,8,9,10,11,12,13,14] });
	}

	//TODO: get images dynamically?
	//Images used below are simply for testing purpose &
	//will be replaced by fjmva photography
	//key is image name which will be unique
	render() {
		var imageElements = this.state.images.map(function(image){
			return (
				<img key={image} className='grid-item'
					src={'../.././assets/images/discover/' + image + '.jpg'}/>
		   	);
		});
		return (
			<div>
				<Masonry
	               className={'discover-grid'}>
	               {imageElements}
	           </Masonry>
           </div>
		);
	}
}

export default Discover;