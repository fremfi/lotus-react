import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const BlogList = ({blogPosts}) => {

  var blogPosts = blogPosts.map(function(blogPost){
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

BlogList.propTypes = {
  blogPosts: PropTypes.array.isRequired
};

export default BlogList;
