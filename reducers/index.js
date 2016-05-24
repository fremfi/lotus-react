import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import blogPosts from './blogReducer';
import gallery from './discoverReducer';

const rootReducer = combineReducers({
  blogPosts: blogPosts,
  gallery: gallery,
  routing: routerReducer
});

export default rootReducer;
