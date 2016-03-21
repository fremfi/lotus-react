import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Discover from './components/discover/Discover';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Contact}></IndexRoute>
    	<Route path="about" component={About}></Route>
    	<Route path="discover" component={Discover}></Route>
    </Route>
  </Router>
), document.getElementById('app')); 



