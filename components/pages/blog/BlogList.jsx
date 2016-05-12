import React from 'react';
import { Link } from 'react-router';
import Cosmic from 'cosmicjs';
import _ from 'lodash';
import BlogDetails from './BlogDetails.jsx';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var blogPosts = this.props.blogPosts.map(function(blogPost){
      return (
        <div className="row" key={blogPost.slug}>
          <div className="col s12">
            <Link to={ '/blog/' + blogPost.slug }><h5 className="blog-post-title">{blogPost.title}</h5></Link>
            <hr className="blog-post-title-seperator"></hr>
            <div className="blog-post-preview" dangerouslySetInnerHTML={ {__html: blogPost.metafield[blogPost.slug].value} }></div>
            <Link to={ '/blog/' + blogPost.slug }><p className="read-more-link">Read more...</p></Link>
          </div>
        </div>
      );
    });
    return (
      <div>
        {blogPosts}
      </div>
    );
  }
}

export default Blog;
