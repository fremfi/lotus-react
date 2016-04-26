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
		return (
			<Masonry
               className={'discover-grid'}>
               <img className="grid-item"
				src="../.././assets/images/discover/1.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/2.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/3.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/4.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/5.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/6.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/7.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/8.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/9.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/10.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/11.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/12.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/13.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/14.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/15.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/16.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/17.jpg"/>
				<img className="grid-item"
				src="../.././assets/images/discover/18.jpg"/>
           </Masonry>
		);
	}
}

export default Discover;