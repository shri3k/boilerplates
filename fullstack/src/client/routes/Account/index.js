import React from 'react';

import Account from './Account';

export default {
  path: '/account',
  async action() {
    return {
      component: <Account />,
    };
  },
};
