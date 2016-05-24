import initialState from './initialState';

export default function discoverReducers(state = initialState.gallery, action) {
	switch (action.type) {
		case 'LOAD_MORE_IMAGES':
			return {
        lastLoadedPage: state.lastLoadedPage + 1,
				hasMoreImages: action.response.hasMoreImages,
				images: state.images.concat(action.response.data)
			}
			break;
		default:
			return state;
	}
}
