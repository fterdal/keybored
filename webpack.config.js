const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  output: {
    publicPath: 'public',
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
