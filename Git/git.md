# Git
## Personal access tokens
a71224471d5ba7a1505c4045bff2ae3339af7fd2



## 初始化一个Git仓库
git init
## 添加文件或者修改文件, 把文件添加到暂存区
git add <fileName>
## 添加新文件和编辑过的文件不包括删除的文件
git add -A
## 添加编辑或者删除的文件，不包括新添加的文件
git add -u
## commit把文件提交到仓库, 把暂存区的内容提交到当前分支
git commit -m "some description"
## git add + git commit
git commit -a -m "some descript"
## 提交代码到github
git push
## git status暂存区状态
git status
## 查看修改内容
git diff
## 删除一个文件
git rm <fileName>
## 从远程库克隆, cmd+c内容
git clone "address""
## 创建新的f1分支
git branch f1
## 切换到f1分支
git checkout f1
## 合并写法
git checkout -b f1
## 合并f1分支到master分支
git merge f1
## 删除f1分支
git branch -d f1
## 如果要强行删除，需要使用命令
git branch -D f1
## 查看提交历史,查找commit_id
git log
## 看分支合并图。
git log --graph
## 推送分支
git push origin dev
## 查看未来历史，查找commit_id
git reflog
## HEAD指向的版本就是当前版本
git reset --hard <commit_id>
## 误删的文件恢复到最新版本
## 改乱了工作区文件内容，想撤销(没有 git add)
git checkout -- <file>
## 改乱了工作区文件内容，想撤销(已经git add)
git checkout HEAD <file>
## 打一个新标签
git tag v1.0
## 查看所有标签
git tag
## 查看标签信息：
git show v0.9
## 将tag文件打包
## ruby 文件名称   /tmp 文件目录
## 打成ruby1.0.tar.gz包
git archive --format=tar --prefix=ruby/ v1.0 | gzip > /tmp/ruby1.0.tar.gz
## 打开tar包
tar zxvf ruby1.0.tar.gz
## 查看对象类型
git cat-file -t <hash前6位>
## 查看对象内容 
git cat-file -p <hash前6位>
## 列出该文件的hash值
git hash-object <目标文件>



## 远程仓库
## 创建SSH Key, 然后一路回车
## iterm: 
ssh-keygen -t rsa -C "583520052@qq.com"
.ssh
ls
cat id_rsa.pub
## [github](https://github.com/settings/keys): 网站里操作
## copy key paste to SSH keys
## 只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送
## 关联一个远程库
git remote add origin https://github.com/GanYihuan/imooc.git
## -u参数,会把本地的master分支内容推送的远程新的master分支，
git push -u origin master
## 要查看远程库的信息，-v显示更详细的信息：
git remote -v
## 第一次使用Git的clone或者push命令连接GitHub时，会得到一个警告：
输入yes回车
## 现在起，只要本地作了提交，推送最新修改
git push
## 查看是否已经与远程仓库连接
git config --list
## 另外一种连接方式
git config --global user.name 'GanYihuan'
git config --global user.email '583520052@qq.com'
## 分支管理策略
## master分支用来发布新版本，平时不能在上面干活；
## 1.0版本发布时，dev分支合并到master上，在master分支发布1.0版本；
## 每个人都在dev分支上干活，有自己的分支，往dev分支上合并
## Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息
## --no-ff参数，表示禁用Fastforward：合并后的历史有分支，能看出来曾经做过合并
## 本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。
git merge --no-ff -m "merge with no-ff" dev
## 合并后，我们用git log看看分支历史：
git log --graph



## Bug分支
## 当前正在dev上进行工作，把工作现场“储藏”起来，等以后恢复现场后继续工作：
git stash
## 假定需要在master分支上修复，就从master创建临时分支
git checkout -b issue-101
## 修复bug，提交：
git add readme.txt 
git commit -m "fix bug 101"
## 修复完成后，切换到master分支，并完成合并，最后删除issue-101分支：
git checkout master
git merge --no-ff -m "merged bug fix 101" issue-101
git branch -d issue-101
## 接着回到dev分支干活,工作现场查看
git stash list
## 工作现场还在，Git把stash内容存在某个地方了，但是需要恢复
## 1:恢复后，stash内容并不删除，你需要用git stash drop来删除；
git stash apply
## 2:恢复的同时把stash内容也删了：
git stash pop
## 恢复指定的stash
git stash apply stash@{0}



## 多人协作
## 当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，
## 远程3仓库的默认名称是origin。
## 推送分支
git push origin dev
## master分支是主分支，因此要时刻与远程同步；
## dev分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
## bug分支只用于在本地修复bug
## feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。



## 抓取分支
## Desktop/test/learngit
git clone git@github.com:GanYihuan/learngit.git
## 当你的小伙伴从远程库clone时，只能看到本地的master分支
git branch
## 查看远程库的信息
git remote -v
## 你的小伙伴要在dev分支上开发，就必须创建远程origin的dev分支到本地，
git checkout -b dev origin/dev
## 你的小伙伴就可以在dev上继续修改，然后，时不时地把dev分支push到远程：
git add readme.txt
git commit -m "add /usr/bin/env"
## 你的小伙伴已经向origin/dev分支推送了他的提交，
## 而碰巧你也对同样的文件作了修改，并试图推送：
## Desktop/test2/learngit
git add hello.py 
git commit -m "add coding: utf-8"
git push origin dev
## 推送失败
## 解决办法, 指定本地dev分支与远程origin/dev分支的链接
git branch --set-upstream dev origin/dev
## 把最新的提交从origin/dev抓下来
git pull



## 多人协作的工作模式通常是这样：
## 首先，可以试图用推送自己的修改；
git push origin branch-name
## 如果推送失败，则因为远程分支比你的本地更新，需要先用试图合并；
git pull
## 如果git pull提示“no tracking information”，
## 则说明本地分支和远程分支的链接关系没有创建，
git branch --set-upstream branch-name origin/branch-name
## 如果合并有冲突，则解决冲突，并在本地提交；
## 没有冲突或者解决掉冲突后，再用推送就能成功！
git push origin branch-name



## tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。
## 找到历史提交的commit id
git log --pretty=oneline --abbrev-commit
## 比方说要对add merge这次提交打标签，它对应的commit id是6224937
git tag v0.9 6224937
## 创建带有说明的标签，用-a指定标签名，-m指定说明文字
git tag -a v0.1 -m "version 0.1 released" 3628164



## 私钥签名一个标签：
git tag -s v0.2 -m "signed version 0.2 released" fec145a
## 签名采用PGP签名，因此，必须首先安装gpg（GnuPG），
## 如果没有找到gpg，或者没有gpg密钥对，就会报错：
## 如果报错，请参考GnuPG帮助文档配置Key。
git show v0.2



## 操作标签
## 推送某个标签到远程
git push origin v1.0
## 一次性推送全部尚未推送到远程的本地标签：
git push origin --tags
## 标签已经推送到远程
## 先从本地删除
git tag -d v0.9
## 然后，从远程删除
git push origin :refs/tags/v0.9



## 创建个人站点
1. 建仓库 xxx.github.io
2. 建xxx.html文件
3. 浏览器访问 xxx.github.io



## Project pages
https://xxx.github.io/responsibility
1. setting
2. launch automatic page generator 自动生成主题
3. 设置
4. 选择主题
5. publish page

