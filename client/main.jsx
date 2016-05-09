import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/app';
import Contact from '../components/pages/contact/Contact';
import About from '../components/pages/about/About';
import Blog from '../components/pages/blog/Blog';
import BlogDetails from '../components/pages/blog/BlogDetails';
import Discover from '../components/pages/discover/Discover';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from '../redux/reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware)
);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={About}></IndexRoute>
        <Route path="blog" component={Blog}>
          <Route path=":slug" component={Blog}></Route>
        </Route>
        <Route path="blog/:slug" component={Blog}></Route>
        <Route path="contact" component={Contact}></Route>
        <Route path="discover" component={Discover}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));



