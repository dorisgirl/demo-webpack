var autoprefixer = require('autoprefixer');
module.exports = {
  entry: './main.js',  //输入main.js
  output: {
      path: __dirname, // 输出文件的保存路径
      filename: 'bundle.js' // 输出文件的名称
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return
      // [px2rem({remUnit: 75})],
      [require('autoprefixer'), require('precss')];
      // [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  }
}