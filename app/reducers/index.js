import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import loadedAlbums from './ManageLoadedAlbums';

const rootReducer = combineReducers({
  routing,
  loadedAlbums,
});

export default rootReducer;
