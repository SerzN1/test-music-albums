import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BaseContainer from './containers/BaseContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BaseContainer} />
  </Route>
);
