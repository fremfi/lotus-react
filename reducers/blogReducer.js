import initialState from './initialState';

export default function blogReducer(state = initialState.blogPosts, action) {
	switch (action.type) {
    case 'LOAD_BLOG_POSTS':
        return action.blogPosts;
        break;
		default:
			return state;
	}
}
