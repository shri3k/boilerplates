export default function Html(data) {
  return `
    <!doctype html>
    <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>My App</title>
      </head>
      <body>
        <div id="root">${data.children}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(data.state).replace(/</g, '\\u003c')}
        </script>
        <script src="https://cdn.auth0.com/js/lock/11.5.2/lock.min.js"></script>
        <script src=${data.js}></script>
      </body>
    </html>
  `;
}
