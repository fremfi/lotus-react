import React from 'react';
import Masonry from 'react-masonry-component';

class Discover extends React.Component{
	constructor() {
		super();
		this.state = {
			gallery: {
				hasMoreImages: true,
				images: []
			}
		};
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillMount() {
		this.loadMoreImages();
	}

	handleScroll() {
		var visibleHeight = window.innerHeight;
		var hiddenContentHeight = document.body.scrollHeight - visibleHeight;
		if ((hiddenContentHeight - document.body.scrollTop) < 100) {
			if (this.state.gallery.hasMoreImages) {
				this.loadMoreImages();
			}
		}
	}

	loadMoreImages() {
		$.ajax({
		  	url : "/api/images",
		  	type: "GET",
		  	success: function(data) {
		  		//TODO: structure backend to return hasMoreImages
				this.setState({
					gallery: {
						hasMoreImages: true,
						images: data
					}
				});
		  	}.bind(this),
		  	error: function (error) {
		    	//TODO: respond to error
		  	}
		});
	}

	//TODO:
	//Images used below are simply for testing purpose &
	//will be replaced by fjmva photography
	render() {
		var imageElements = this.state.gallery.images.map(function(image){
			return (
				<img key={image} className='grid-item'
					src={'../.././assets/images/discover/' + image}/>
		   	);
		});
		return (
			<Masonry
               className={'discover-grid'}>
               {imageElements}
           </Masonry>
		);
	}
}

export default Discover;