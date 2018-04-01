export default function Html(data) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root">${data.children}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(data.state).replace(
    /</g,
    '\\u003c',
  )}
        </script>
        <script src=${data.js}></script>
      </body>
    </html>
  `;
}
