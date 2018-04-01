import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';

function configureStore(initState = {}) {
  const middlewares = [thunk.withExtraArgument({})];
  const enhancers = applyMiddleware(...middlewares);
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(reducers, initState, composeEnhancers(enhancers));

  return store;
}

export default configureStore;
