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
        <article className="row" key={blogPost.slug}>
          <div className="col s12">
            <Link to={ '/blog/' + blogPost.slug }><h5 className="article-title">{blogPost.title}</h5></Link>
            <hr className="seperator"></hr>
            <div dangerouslySetInnerHTML={ {__html: blogPost.metafield[blogPost.slug].value} }></div>
            <Link to={ '/blog/' + blogPost.slug }><p className="read-more-link">Read more...</p></Link>
          </div>
        </article>
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
