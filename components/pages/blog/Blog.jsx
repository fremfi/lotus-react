import React from 'react';
import { Link } from 'react-router';
import Cosmic from 'cosmicjs';
import _ from 'lodash';
import BlogDetails from './BlogDetails';
import BlogList from './BlogList';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    }; 
  }

  componentWillMount() {
    const bucket = { slug: 'fjmva' };
    Cosmic.getObjects({ bucket }, function(err, res) {
      this.setState({blogPosts: res.objects.all});
    }.bind(this));
  }

  render() {
    if(this.props.params.slug) {
      var slug = this.props.params.slug;
      var blogPost = _.find(this.state.blogPosts, function(blogPost) { return _.isEqual(blogPost.slug, slug); });
      return (
        <div>
          <BlogDetails blogPost={blogPost}/>
        </div>
      );
    }
    else {
      var blogPosts = this.state.blogPosts;
      return (
        <div>
          <BlogList blogPosts={blogPosts}/>
        </div>
      );
    }    
  }
}

export default Blog;
