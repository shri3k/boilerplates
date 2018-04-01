import UniversalRouter from 'universal-router';
import routes from './';

async function resolver({ path = '/', query = '', context = {} }) {
  const router = new UniversalRouter(routes, {
    ...context,
    path,
    query,
  });
  const route = await router.resolve({ pathname: path });
  return route;
}

export default resolver;
