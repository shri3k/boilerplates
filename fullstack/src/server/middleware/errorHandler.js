export default (async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.type = 'html';
    ctx.body = '<p>Something <em>happened</em></p>';
    ctx.app.emit('error', err, ctx);
  }
});
