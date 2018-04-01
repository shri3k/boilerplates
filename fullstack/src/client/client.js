import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { hydrate } from 'react-dom';

import App from './App';
import configureStore from './store/configureStore';
import resolver from './routes/resolver';

/* eslint-disable no-underscore-dangle, no-undef */
const store = configureStore(window.__PRELOADED_STATE__);
const currLoc = window.location;
const history = createHistory();

async function locationListener(location) {
  const context = {
    store,
  };
  const route = await resolver({ path: location.pathname, context });
  // If redirect from component level - obey it
  if (route.redirect) {
    window.location = route.redirect;
    return;
  }
  const MyApp = () => <App child={route.component} store={store} />;
  hydrate(<MyApp />, document.querySelector('#root'));
}

const unlisten = history.listen(locationListener);
//
unlisten();
locationListener(currLoc);
