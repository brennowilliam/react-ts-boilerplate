module.exports = () => ({
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
})
