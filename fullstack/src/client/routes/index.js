import dashboard from './Dashboard';
import account from './Account';
import isEmpty from 'lodash.isempty';
// import protected from './Protected';

export default {
  path: '/',
  children: [dashboard, account],
  async action({ store, next }) {
    if (isEmpty(store.getState().user.details)) {
      return {
        redirect: '/',
      };
    }
    const child = await next();
    return child;
  },
};
