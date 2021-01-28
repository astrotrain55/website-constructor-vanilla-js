const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
};
