const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')
// const dotenv = require('dotenv').config({
//   path: path.join(__dirname, '.env')
// });

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new Dotenv(),
    // new webpack.DefinePlugin({
    //   "process.env": dotenv.parsed
    // }),
  ],

  node: {
    fs: 'empty',
  }
}