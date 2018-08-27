const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const webpackMerge = require('webpack-merge')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: './src/index.tsx',
      output: {
        filename: './dist/bundle.js',
      },
      devtool: 'source-map',
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: 'ts-loader' },
          { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
      },
      plugins: [new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  )
}
