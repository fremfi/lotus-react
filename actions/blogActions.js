import Cosmic from 'cosmicjs';

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
