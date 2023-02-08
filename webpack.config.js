const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const buildTarget = process.env['BUILD_TARGET'] ?? 'DEV'
const distDirectory = buildTarget === 'DEV' ? 'dist' : 'build';

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, distDirectory),
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