import React from 'react';
import Masonry from 'react-masonry-component';

class Discover extends React.Component{
	constructor() {
		super();
		this.isLoading = false;
		this.state = {
			gallery: {
				lastLoadedPage: 0,
				hasMoreImages: true,
				images: []
			}
		};
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll.bind(this));
    	//Initialize: Get the first page of images
    	this.loadMoreImages(this.state.gallery.lastLoadedPage);
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	handleScroll() {
		var visibleHeight = window.innerHeight;
		var hiddenContentHeight = document.body.scrollHeight - visibleHeight;
		if ((hiddenContentHeight - document.body.scrollTop) < 100) {
			if (this.state.gallery.hasMoreImages && !this.isLoading) {
				this.loadMoreImages(this.state.gallery.lastLoadedPage);
			}
		}
	}

	loadMoreImages(page) {
		this.isLoading = true;
		$.ajax({
		  	url : '/api/images',
		  	type: 'GET',
		  	data: { 'page': page },
		  	success: function(response) {
					this.setState({
						gallery: {
							lastLoadedPage: this.state.gallery.lastLoadedPage + 1,
							hasMoreImages: response.hasMoreImages,
							images: this.state.gallery.images.concat(response.data)
						}
					});
					this.isLoading = false;
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
				<img className='grid-item'
					key={image} src={'../.././assets/images/discover/' + image}/>
		   	);
		});
		return (
			<Masonry
	    	className={ 'discover-grid' }
	    	options={ { transitionDuration: '1s' } }>
	    	{imageElements}
      </Masonry>
		);
	}
}

export default Discover;