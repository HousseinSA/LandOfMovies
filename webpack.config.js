const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser")
    }
  },
  module: {
    rules: [
      // your rules here
    ]
  },
  plugins: [
    // your plugins here
  ]
};
