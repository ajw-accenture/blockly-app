const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BLOCKLY',
      template: 'index.html'
    }),
    new CopyPlugin({
        patterns: [
          { from: "node_modules/blockly/media", to: "media" },
        ],
      })
  ]
};