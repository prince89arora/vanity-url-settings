const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

function getCssRule() {
  if (process.env.NODE_ENV === 'development') {
    return ['style-loader', 'css-loader']
  } else {
    return [MiniCssExtractPlugin.loader, 'css-loader']
  }
}

const getDevTools = () => {
  return (process.env.NODE_ENV === 'development') ? undefined : 'source-map';
}

module.exports = {
  devtool: getDevTools(),
  entry: './src/index.tsx',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(
      __dirname,
      '../site-settings/src/main/resources/javascript/ui-bundle'
    ),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader'
      },
      {
        test: /\.css(\?.*)?$/i,
        use: getCssRule(),
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: 'index.html', //target html
      template: './src/index.html', //source html
    }),
    new MiniCssExtractPlugin({
      filename: '../../css/ui-bundle/[name].css',
    }),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }
}
