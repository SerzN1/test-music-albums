import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import loadedAlbums from './ManageLoadedAlbums';
import savedAlbums from './ManageSavedAlbums';

const rootReducer = combineReducers({
  routing,
  loadedAlbums,
  savedAlbums,
});

export default rootReducer;
