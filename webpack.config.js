const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Output bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JavaScript files
        },
      },
      // Add TypeScript loader if using TypeScript
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],  // Resolve .js and .ts extensions
  },
};
