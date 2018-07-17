1.打开terminal终端。 
2.进入当前用户的home目录。 
3.创建.bash_profile文件，输入命令：touch .bash_profile 
4.打开.bash_profile文件，命令行输入open -e .bash_profile 此命令行输入完毕后，会自动弹出 .bash_profile 文件的编辑窗口 
5.编辑.bash_profile文件，内容如下：

ANDROID_HOME=/Users/YourUsername/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
1
2
3
6.保存并关闭.bash_profile文件。 
7.更新配置的环境变量： 
输入并执行命令source .bash_profile 
8.输入adb验证环境变量是否配置成功，如果没有出现command not found的话就基本上完事儿了。

这里还要说明一下，如果使用的oh my zsh的shell按照以上的配置在关掉terminal之后会失效，这个可真是个坑草了个蛋了，google到了原因及解决办法，确实是zsh的问题，解决办法如下： 
找到User目录下面的.zshrc文件,打开编辑器，在文件的末尾加上

#Enable my profile
source ~/.bash_profile
1
2
保存文件并关闭，terminal输入adb命令验证是否配置成功，问题解决~