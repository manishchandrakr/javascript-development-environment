import path from 'path'
export default {
  entry : [path.resolve(__dirname, 'src/index')],
  output : {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  debug : true,
  devtool : 'inline-source-map',
  noInfo : false,
  target : 'web',
  plugins : [],
  module : {
    loaders: [
      {
        test : /\.js$/,
        exclude: /node_modules/,
        loaders:['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  }
}
