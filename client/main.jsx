import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/app';
import Contact from '../components/pages/contact/Contact';
import About from '../components/pages/about/About';
import Discover from '../components/pages/discover/Discover';
import Blog from '../components/pages/blog/Blog';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={About}></IndexRoute>
      	<Route path="blog" component={Blog}></Route>
    	<Route path="contact" component={Contact}></Route>
    	<Route path="discover" component={Discover}></Route>
    </Route>
  </Router>
), document.getElementById('app'));



