import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import Layout from './components/Layout';

function App({ child, store }) {
  return (
    <Provider store={store}>
      <Layout>{child}</Layout>
    </Provider>
  );
}

App.propTypes = {
  child: PropTypes.shape({}),
  store: PropTypes.shape({}),
};

App.defaultProps = {
  child: {},
  store: {},
};

export default App;
