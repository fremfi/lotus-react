import React, { PropTypes } from 'react';

const BlogDetails = ({blogPost}) => {

  return (
    <article>
      <div className="row" key={blogPost.slug}>
        <div className="col s12">
          <h5 className="article-title">{blogPost.title}</h5>
          <hr className="seperator"></hr>
          <div dangerouslySetInnerHTML={ {__html: blogPost.content} }></div>
        </div>
      </div>
    </article>
  );

}

export default BlogDetails;
