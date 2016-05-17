import React from 'react';

class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <div className="row" key={this.props.blogPost.slug}>
          <div className="col s12">
            <h5 className="article-title">{this.props.blogPost.title}</h5>
            <hr className="seperator"></hr>
            <div dangerouslySetInnerHTML={ {__html: this.props.blogPost.content} }></div>
          </div>
        </div>
      </article>
    );
  }
}

export default BlogDetails;
