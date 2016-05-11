import Cosmic from 'cosmicjs';

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

export function fetchBlogPosts() {
    return function(dispatch) {
        const bucket = { slug: 'fjmva' };
        return Cosmic.getObjects({ bucket }, function(err, res) {
            dispatch(loadBlogPosts(res.objects.all));
        });
    }
}

export function loadBlogPosts(blogPosts) {
    return {
        type: 'LOAD_BLOG_POSTS',
        blogPosts: blogPosts
    }
}

export function loadMoreImages(response) {
	return {
		type: 'LOAD_MORE_IMAGES',
  		response: response
  	}
}