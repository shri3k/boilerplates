# Frontend with backend

An attempt to make a site with as minimal deps as possible.

## Includes:
- Node v9+
  - yarn
  - @std/esm // For import/export support
  - koa v2+
    - koa-route
    - koa-mount
  - dotenv // config management
- React v16.3.0+
  - redux
    - redux-devtools-extension
  - react-redux
  - redux-thunk
  - eslint
    - eslint-config-airbnb
  - webpack v4+ // mostly used to bundle js into single file
    - source-map-loader
  - babel v7+
    -
- Universal Router // For SSR
- nodemon
- static-server // For servicing assets but could use other servers like nginx too
- prettier
- Tests // Pending..

## Usage
```js
yarn
npm start
```

