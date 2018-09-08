const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const modeConfig = env => require(`./build-utils/webpack.${env}.ts`)(env)
const webpackMerge = require('webpack-merge')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: './src/index.tsx',
      output: {
        filename: './dist/bundle.js',
      },
      // devtool: 'source-map',
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'React-Ts',
          filename: 'dist/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode)
  )
}
