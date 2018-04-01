/* eslint-disable import/newline-after-import, import/first  */
require('@std/esm');

import Koa from 'koa';

// Clientside
import { renderToString } from 'react-dom/server';

import assets from '../../../../webpack-assets.json';
import resolver from '../../../../compiled/routes/resolver';
import configureStore from '../../../../compiled/store/configureStore';
import App from '../../../../compiled/App';
import Html from '../../../../compiled/Html';

const app = new Koa();

async function handleRender(ctx) {
  const store = configureStore({
    /**
     * add any initial state here
     */
  });
  const { path, query } = ctx;
  const { redirect } = ctx;

  const context = {
    store,
  };

  const route = await resolver({
    path,
    query,
    context,
  });

  // If redirect from component level - obey it
  if (route.redirect) {
    redirect(route.status || 302, route.redirect);
    return;
  }

  const data = { ...route };
  data.children = renderToString(App(route.component, store));
  data.state = store.getState();
  data.js = assets.main.js;
  // add js and css assets here too

  ctx.body = Html(data);
}

app.use(handleRender);

if (!module.parent) {
  app.listen(process.env.NODE_PORT);
}

export default app;
