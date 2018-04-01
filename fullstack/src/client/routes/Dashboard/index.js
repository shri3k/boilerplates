import React from 'react';

import Dashboard from './Dashboard';

export default {
  path: '/',
  async action() {
    return {
      component: <Dashboard />,
    };
  },
};
