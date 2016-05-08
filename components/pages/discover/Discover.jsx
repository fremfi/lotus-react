import React from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { fetchImages } from '../../../redux/actions';

class Discover extends React.Component {
	constructor(props) {
		super(props);
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

	loadMoreImages(page) {
		this.isLoading = true;
		this.props.fetchImages(page);
	}

	render() {
		this.isLoading = false;
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

function mapStateToProps(state) {
	return {
		gallery: state.default.gallery
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImages: function (page) {
      return dispatch(fetchImages(page));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover)
