import React from 'react';
import Masonry from 'react-masonry-component';

class Discover extends React.Component{
	constructor() {
		super();
	}

	//TODO: get images dynamically?
	//Images used below are simply for testing purpose &
	//will be replaced by fjmva photography
	render() {
		var images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
		var imageElements = images.map(function(image){
			return (
				<img className='grid-item'
					src={'../.././assets/images/discover/' + image + '.jpg'}/>
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