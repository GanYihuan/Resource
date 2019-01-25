# Sass

## 环境

> 安装

[rvm](http://rvm.io/)
[brew](http://brew.sh/)
[cakebrew](https://www.cakebrew.com/)

> rvm

`rvm list`
`rvm use 版本号`
`rvm use --default 版本号`

> ruby 包管理工具 gem

- 查看当前源 `gem source` 查看安装了什么 `gem list`
- gem 换源(如果需要淘宝的话) `gem sources --remove https://rubygems.org` `gem sources --add https://gems.ruby-china.com`
- 如果换源失败: `gem sources --add http://gems.ruby-china.org/`
- 安装 sass `gem install sass`
- 安装 compass `gem install compass --pre`
- compass 创建项目 `compass create myproject` `compass -v`

> window

```console
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd targetFile
npm init
cnpm install node-sass sass-loader --save-dev
```

## 编译

> node-sass 环境中

`node-sass --watch <源文件> <目标文件>`

> 实时编译

`sass --watch sass/bootstrap.scss:css/bootstrap.css`

> 多文件编译
> 项目中“sass”文件夹中所有“.scss”(“.sass”)文件编译成“.css”文件，并且将这些 CSS 文件都放在项目中“css”文件夹中。
> 点击底部栏 `Live Sass Compiler 插件` `Watch Sass`

`sass --watch sass/:css/`

> 风格

1. 嵌套输出方式 nested
2. 展开输出方式 expanded
3. 紧凑输出方式 compact
4. 压缩输出方式 compressed

`sass --watch test.scss:test.css --style nested`
