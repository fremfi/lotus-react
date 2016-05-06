export function fetchImages(page) {
	return function(dispatch) {
		return $.ajax({
		  	url : '/api/images',
		  	type: 'GET',
		  	data: { 'page': page },
		  	success: function(response) {
				dispatch(loadMoreImages(response));
		  	},
		  	error: function (error) {
		    	//TODO: respond to error
		  	}
		});
	}
}

export function loadMoreImages(response) {
	return {
		type: 'LOAD_MORE_IMAGES',
  		response: response
  	}
}