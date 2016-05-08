import React from 'react';

class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row" key={this.props.blogPost.slug}>
          <div className="col s12">
            <h5 className="blog-post-title">{this.props.blogPost.title}</h5>
            <hr className="blog-post-title-seperator"></hr>
            <div className="blog-post-preview" dangerouslySetInnerHTML={ {__html: this.props.blogPost.content} }></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogDetails;
