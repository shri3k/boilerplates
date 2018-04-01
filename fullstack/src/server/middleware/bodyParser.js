/* eslint-disable import/newline-after-import, import/first  */

require('@std/esm');

import body from 'koa-body';

export default body({
  jsonLimit: '2kb',
});
