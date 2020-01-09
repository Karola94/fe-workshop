const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          template: 'index.html'
      })
  ],
  optimization: {
      runtimeChunk: 'single',
      splitChunks: {
          cacheGroups: {
              vendor: {
                  test: /node_modules/,
                  name: 'vendors',
                  chunks: 'all'
              }
          }
      }
  }
};