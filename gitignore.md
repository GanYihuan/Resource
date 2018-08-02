﻿# gitignore

## 【问题】

> 有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表,比如日志文件，
> 或者编译过程中创建的临时文件等。
> 【解决办法】
> 创建一个名为 .gitignore 的文件，列出要忽略的文件模式。

## 【1】【.gitignore 格式规范如下】

- 1.所有空行或者以 ＃开头的行都会被 Git 忽略。
- 2.可以使用标准的 glob 模式匹配。
- 3.匹配模式可以以（/）开头防止递归。
- 4.匹配模式可以以（/）结尾指定目录。
- 5.要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

## 【2】【glob 模式】是指 shell 所使用的简化了的正则表达式

- 1.星号（\*）匹配零个或多个任意字符；
- 2.[abc]匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；
- 3.问号（?）只匹配一个任意字符；
- 4.如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9] 表示匹配所有 0 到 9 的数字）。
- 5.使用两个星号（**) 表示匹配任意中间目录，比如 a/**/z 可以匹配 a/z, a/b/z 或 a/b/c/z 等。

## 【3】【.gitignore 文件的例子】

- 忽略所有以 .o 或 .a 结尾的文件
  > \*.[oa]
- 忽略所有以波浪符（~）结尾的文件
  > \*~
- 忽略所有后缀是.a 的文件
  > \*.a
- 不忽略 lib.a 文件，即使上面有定义过忽略.a 后缀文件
  > !lib.a
- 忽略 TODO 文件
  > /TODO
- 忽略 build 文件夹
  > build/
- 忽略 doc 下.txt 文件，但是如果 doc 下有子文件夹，子文件夹中的.txt 文件不忽略
  > doc/\*.txt
- 忽略 doc 文件夹下所有 pdf 文件，包括子目录中 pdf
  > doc/\*_/_.pdf

## 【4】【.gitignore 实际用到项目中】

> 在实际项目中，无需自己重新写.gitignore 文件，有开源项目（https://github.com/github/gitignore) 帮我们做了，直接拿过来用即可

- 1.同步开源项目到本地
  > $ git clone https://github.com/github/gitignore.git
- 2.找到自己项目对应.gitignore 文件，这里我们以 c++项目为例，找到 C++.gitignore，copy 到我们自己项目的根目录下
  > cd gitignore
  > cp C++.gitignore <自己项目路径跟目录/.gitignore>
- 3.根据自己需求修改.gitignore 文件
- 4.查看是否生效
  > cd <自己项目路径跟目录>
  > .gitignore 忽略了.a 文件，所以我们新建.a 文件测试
  > touch test.a
  > 添加 test.a 文件到 git
  > git add test.a
  > 得到下面提示，说明已经生效了
  > The following paths are ignored by one of your .gitignore files:
  > test.a
  > Use -f if you really want to add them.