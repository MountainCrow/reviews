const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
