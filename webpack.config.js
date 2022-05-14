/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2018. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/

//const path = require('path')
//const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/client/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            },
          },
        ]
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: { importLoaders: 2 },
      //     },
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         plugins: () => [
      //           require('autoprefixer')({
      //             browsers: ['last 1 version', 'ie >= 11'],
      //           }),
      //         ],
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         includePaths: [path.resolve(__dirname, '..', 'node_modules')],
      //       }
      //     }
      //   ],
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/static/index.html',
      favicon: './src/client/static/images/favicon.ico',
      //filename: './dist/index.html'
    })
  ],
  output: {
    path: __dirname + '/dist/static',
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: [{
      context: ['/api', '/auth'],
      target: 'http://localhost:3001'
    }]
  },
  devtool: 'inline-source-map'
}
