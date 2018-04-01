# Frontend with backend

An attempt to make a site with as minimal deps as possible.

## Includes:
- Node v9+
  - [yarn](https://yarnpkg.com/en/)
  - [esm](https://www.npmjs.com/package/esm) // For import/export support
  - [koa v2+](http://koajs.com/)
    - [koa-route](https://github.com/koajs/route)
    - [koa-mount](https://github.com/koajs/mount)
  - [dotenv](https://github.com/motdotla/dotenv) // config management
- React v16.3.0+
  - [redux](https://redux.js.org/)
    - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
  - [react-redux](https://github.com/reactjs/react-redux)
  - [redux-thunk](https://github.com/gaearon/redux-thunk)
  - [eslint](https://eslint.org/)
    - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - [webpack v4+](https://webpack.js.org/) // mostly used to bundle js into single file
    - [source-map-loade](https://github.com/webpack-contrib/source-map-loader)
  - [babel v7+](https://github.com/babel/babel/releases/tag/v7.0.0-beta.42)
- [Universal Router](https://github.com/kriasoft/universal-router) // For SSR
- [nodemon](http://nodemon.io/)
- [static-server](https://github.com/nbluis/static-server) // For servicing assets but could use other servers like nginx too
- [prettier](https://prettier.io/)
- Tests // Pending..

## Usage
```js
yarn
npm start
```

