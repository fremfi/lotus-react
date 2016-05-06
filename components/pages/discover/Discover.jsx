import React from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { loadMoreImages } from '../../../redux/actions';

class Discover extends React.Component {
	constructor() {
		super();
		this.isLoading = false;
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll.bind(this));
    	//Initialize: Get the first page of images
    	this.loadMoreImages(this.props.gallery.lastLoadedPage);
	}

	componentWillUnmount() {
    	window.removeEventListener('scroll', this.handleScroll.bind(this));
	}

	handleScroll() {
		var visibleHeight = window.innerHeight;
		var hiddenContentHeight = document.body.scrollHeight - visibleHeight;
		if ((hiddenContentHeight - document.body.scrollTop) < 100) {
			if (this.props.gallery.hasMoreImages && !this.isLoading) {
				this.loadMoreImages(this.props.gallery.lastLoadedPage);
			}
		}
	}

	//TODO: Follow up on async actions with redux
	loadMoreImages(page) {
		this.isLoading = true;
		$.ajax({
		  	url : '/api/images',
		  	type: 'GET',
		  	data: { 'page': page },
		  	success: function(response) {
				this.props.loadMoreImages(response);
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
		var imageElements = this.props.gallery.images.map(function(image){
			return (
				<img className='grid-item'
					key={image} src={'../assets/images/discover/' + image}/>
		   	);
		});
		return (
			<div>
				<Masonry
			    	className={ 'discover-grid' }
			    	options={ { transitionDuration: '2s' } }>
			    	{imageElements}
      			</Masonry>
      		</div>
		);
	}

}

export default connect(state => ({gallery: state.default.gallery}), { loadMoreImages })(Discover)
