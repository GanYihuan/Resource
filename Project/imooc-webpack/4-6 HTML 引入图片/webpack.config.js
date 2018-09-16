﻿var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var PurifyCss = require('purifycss-webpack')
var glob = require('glob-all')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var extractLess = new ExtractTextWebpackPlugin({
  filename: 'css/[name]-bundle-[hash:5].css'
})

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    /* 输出到指定目录下 */
    path: path.resolve(__dirname, 'dist'),
    /* 输出文件都带有 dist 前缀 */
    // publicPath: 'dist/',
    /* 增加绝对路径 */
    publicPath: '/',
    filename: '[name]-bundle-[hash:5].js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      /* 找到本地的 jquery */
      jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
    }
  },
  module: {
    rules: [{
        test: /\.scss$/,
        /* 提取 css */
        use: ExtractTextWebpackPlugin.extract({
          /* 提取出文件用什么处理 */
          fallback: {
            /* 在引入css时，在最后生成的js文件中进行处理，动态创建style标签，塞到head标签里 */
            loader: 'style-loader',
            options: {
              /* singleton(是否只使用一个 style 标签) */
              singleton: true,
              /* transform(转化, 浏览下, 插入页面前, 根据不同浏览器配置不同样式) */
              transform: './css.transform.js'
            }
          },
          use: [{
              /* 打包时把css文件拆出来，css相关模块最终打包到一个指定的css文件中，我们手动用link标签去引入这个css文件就可以了 */
              loader: 'css-loader',
              options: {
                /* 在 css-loader 前应用的 loader 的数量 */
                importLoaders: 2,
                /* 是否压缩 */
                minimize: true,
                /* 启用 css-modules */
                modules: true,
                /* 定义编译出来的名称 */
                localIdentName: '[path][name]_[local]_[hash:base64:5]'
              }
            },
            {
              /* 将css3属性添加上厂商前缀 */
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  /* 加 css 各浏览器前缀 */
                  require('autoprefixer')(),
                  /* 使用未来的 css 语法 */
                  require('postcss-cssnext')(),
                  /* 压缩 css */
                  require('cssnano')(),
                  /* 图片合并成一张图 */
                  require('postcss-sprites')({
                    spritePath: 'dist/assets/imgs/sprites',
                    retina: true
                  })
                ]
              }
            },
            {
              /* 放置 css-loader 下面 */
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            // presets: ['env'],
            presets: ['@babel/preset-env'],
            plugins: ['lodash']
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     limit: 1000,
          //     /* 图片地址不对, 设置绝对路径 */
          //     publicPath: '',
          //     /* 放到 dist 目录 */ 
          //     outputPath: 'dist/',
          //     /* 设置相对路径 */
          //     useRelativePath: true
          //   }
          // },
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              /* 超出 1000 处理成 base64 */
              limit: 1000,
              /* 图片地址不对, 设置绝对路径 */
              publicPath: '',
              /* 放到 dist 目录 */
              outputPath: 'dist/',
              /* 设置相对路径 */
              useRelativePath: true
            }
          },
          {
            /* 压缩图片 */
            loader: 'img-loader',
            options: {
              pngquant: {
                /* 压缩 png */
                quality: 80
              }
            }
          }
        ]
      },
      {
        /* 字体文件 */
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:5].[ext]',
            /* 超出 5000 处理成 base64 */
            limit: 5000,
            /* 图片地址不对, 设置绝对路径 */
            // publicPath: '',
            /* 放到 dist 目录 */
            outputPath: 'assets/imgs/'
            /* 设置相对路径 */
            // useRelativePath: true
          }
        }]
      },
      {
        test: path.resolve(__dirname, 'src/app.js'),
        use: [{
          /* 第三方 js 库 */
          loader: 'imports-loader',
          options: {
            $: 'jquery'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          /* 将 HMTL 模板文件当做一个 string 输出 */
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src']
          }
        }]
      }
    ]
  },
  plugins: [
    /* 提取 css */
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      /* 指定提取css范围, 提取初始化 */
      allChunks: false
    }),
    /* 去除多余的 css */
    new PurifyCss({
      paths: glob.sync([
        path.join(__dirname, './*.html'),
        path.join(__dirname, './src/*.js')
      ])
    }),
    /* 去除多余的 js */
    new UglifyJsPlugin,
    new webpack.ProvidePlugin({
      /* 使用 install jquery */
      $: 'jquery'
    }),
    /* 生成创建 html 入口文件 */
    new HtmlWebpackPlugin({
      /* filename: 输出文件的名字 */
      filename: 'index.html',
      /* template: 本地模版的位置 */
      template: './index.html',
      /* 向 template 或者 templateContent 中注入所有静态资源 */
      // inject: false,
      /* 允许插入到模板中的一些chunk */
      chunks: ['app'],
      /* 压缩 */
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}