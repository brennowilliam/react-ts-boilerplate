const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'bundle.js',
  },
})

// => I can only rebuild if I delete the dist folder. I believe it has to do with 'const'
