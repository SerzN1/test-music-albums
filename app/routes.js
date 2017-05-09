import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AlbumSearch from './containers/AlbumSearch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AlbumSearch} />
  </Route>
);
