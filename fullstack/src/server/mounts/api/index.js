/* eslint-disable import/newline-after-import, import/first  */
require('@std/esm');

import Koa from 'koa';
import route from 'koa-route';

const app = new Koa();

app.use(
  route.get('/api', (ctx) => {
    ctx.body = 'Test for api';
  }),
);

if (!module.parent) {
  app.listen(process.env.NODE_PORT);
}

export default app;
