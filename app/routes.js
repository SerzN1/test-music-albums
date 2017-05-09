import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AlbumSearch from './containers/AlbumSearch';
import SavedAlbums from './containers/SavedAlbums';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AlbumSearch} />
    <Route path="saved" component={SavedAlbums} />
  </Route>
);
