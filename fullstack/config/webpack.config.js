const dotenv = require('dotenv');
const AssetsPlugin = require('assets-webpack-plugin');
const path = require('path');

const assetsPluginInstance = new AssetsPlugin();

dotenv.config();

const { ASSET_PATH } = process.env;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../compiled/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: ASSET_PATH,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // To preserve source-maps from babel transpilation from npm script
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
  },
  devtool: 'source-map',
  plugins: [assetsPluginInstance],
};
