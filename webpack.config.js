var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-px2rem');

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
      return [
        precss, 
        autoprefixer({ browsers: ['last 10 versions'] }), 
        px2rem({remUnit: 75})
      ];
  }
}