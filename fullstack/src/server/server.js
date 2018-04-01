/* eslint-disable import/newline-after-import, import/first  */
require('@std/esm'); // remove this after upgrading to node v10

import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import helmet from 'koa-helmet';
import mount from 'koa-mount';

// Mounts
import api from './mounts/api';
import frontend from './mounts/frontend';

// Middlewares
import errorHandler from './middleware/errorHandler';
import bodyParser from './middleware/bodyParser';

// @TODO: Need logger here

const { NODE_PORT = 3000 } = process.env;

const app = new Koa();

app
  .use(helmet())
  .use(bodyParser)
  .use(errorHandler); // Handle errors

app.use(mount('/', frontend)).use(mount('/api', api));

app.on('error', (err) => console.log(err)); // eslint-disable-line

app.listen(NODE_PORT, () => {
  console.log('Listening in ', NODE_PORT); // eslint-disable-line
});

export default app;
