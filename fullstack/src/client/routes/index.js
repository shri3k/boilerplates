import dashboard from './Dashboard/index';

export default {
  path: '/',
  children: [dashboard],
  async action({ next }) {
    const child = await next();
    return child;
  },
};
