# demo-webpack
1. npm i webpack -g  //全局安装webpack
2. npm i webpack-dev-server //在项目目录中安装本地webpack 建议
3. npm init //初始化项目
4. npm i webpack --save-dev //在当前目录下安装 webpack
5. touch index.html
6. touch main.js
7. touch webpack.config.js<br/>
  webpack.config.js中添加

  ```
  module.exports = {
      entry: './main.js',  //输入main.js
      output: {
          path: __dirname, // 输出文件的保存路径
          filename: 'bundle.js' // 输出文件的名称
      }
  }
```

8. npm instal webpack-dev-server -g //全局安装webpack-dev-server来实现实时刷新<br/>
   npm instal webpack-dev-server --sace-dev 在项目中安装webpack-dev-server来实现实时刷新，此时需要在package.json中配置

   ```
    "scripts": {
	    "start": "webpack-dev-server --inline"
	  }
	```




参考：<br/>
1. _[webpack](http://webpack.github.io/docs/)_<br/>
2. _[webpack 使用教程](https://www.zfanw.com/blog/webpack-tutorial.html)_<br/>
3. _[webpack-demos](https://github.com/ruanyf/webpack-demos)_<br/>
4. _[webpack入门教程](http://www.html-js.com/article/Study-notes-webpack-tutorial%203113)_<br/>

