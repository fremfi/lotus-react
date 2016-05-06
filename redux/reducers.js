const initialState = {
	gallery: {
		lastLoadedPage: 0,
		hasMoreImages: true,
		images: []
	}
};

export default function discoverReducers(state = initialState, action) {
	switch (action.type) {
		case 'LOAD_MORE_IMAGES':
			return Object.assign({}, state, {
			  			gallery: {
							lastLoadedPage: state.gallery.lastLoadedPage + 1,
							hasMoreImages: action.response.hasMoreImages,
							images: state.gallery.images.concat(action.response.data)
						}
					});
			break;
		default:
			return state;
	}
}