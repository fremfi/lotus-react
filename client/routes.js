import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Contact from '../components/contact/ContactPage';
import About from '../components/about/AboutPage';
import Blog from '../components/blog/BlogPage';
import Discover from '../components/discover/DiscoverPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About}></IndexRoute>
    <Route path="blog" component={Blog}>
      <Route path=":slug" component={Blog}></Route>
    </Route>
    <Route path="blog/:slug" component={Blog}></Route>
    <Route path="contact" component={Contact}></Route>
    <Route path="discover" component={Discover}></Route>
  </Route>
);
