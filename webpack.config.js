const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: ['babel-loader']
      },
      {
        test: /\.(s*)css$/,
        exclude: /(node_modules|build)/,
        use: ['style-loader','css-loader', 'sass-loader']
     }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
};