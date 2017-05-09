import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const logger = createLogger({collapsed: true, timestamp: false});
const middleware = [thunk, logger];

const enhancer = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
