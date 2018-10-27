# intellij

## mac

> 下载

[下载破解包](http://idea.lanyus.com)/下载JetbrainsCrack-2.8-release-enc.jar（其中2.8代表版本号，请下载网站中提供的最新版本包）。
将下载的破解包JetbrainsCrack-2.8-release-enc.jar复制到Contents下的bin目录中，如下图（红色部分）：

> host

`sudo vi /etc/hosts`
将0.0.0.0 account.jetbrains.com添加到hosts文件中
输入本机密码后，打开hosts文件，键盘输入 i （插入），修改hosts文件后，按 esc 键退出,再按shift+：键，再输入w和q，保存退出

> 激活窗口上选择Activation Code并输入以下注册码 2018.1.5

K71U8DBPNE-eyJsaWNlbnNlSWQiOiJLNzFVOERCUE5FIiwibGljZW5zZWVOYW1lIjoibGFuIHl1IiwiYXNzaWduZWVOYW1lIjoiIiwiYXNzaWduZWVFbWFpbCI6IiIsImxpY2Vuc2VSZXN0cmljdGlvbiI6IkZvciBlZHVjYXRpb25hbCB1c2Ugb25seSIsImNoZWNrQ29uY3VycmVudFVzZSI6ZmFsc2UsInByb2R1Y3RzIjpbeyJjb2RlIjoiSUkiLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifSx7ImNvZGUiOiJSUzAiLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifSx7ImNvZGUiOiJXUyIsInBhaWRVcFRvIjoiMjAxOS0wNS0wNCJ9LHsiY29kZSI6IlJEIiwicGFpZFVwVG8iOiIyMDE5LTA1LTA0In0seyJjb2RlIjoiUkMiLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifSx7ImNvZGUiOiJEQyIsInBhaWRVcFRvIjoiMjAxOS0wNS0wNCJ9LHsiY29kZSI6IkRCIiwicGFpZFVwVG8iOiIyMDE5LTA1LTA0In0seyJjb2RlIjoiUk0iLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifSx7ImNvZGUiOiJETSIsInBhaWRVcFRvIjoiMjAxOS0wNS0wNCJ9LHsiY29kZSI6IkFDIiwicGFpZFVwVG8iOiIyMDE5LTA1LTA0In0seyJjb2RlIjoiRFBOIiwicGFpZFVwVG8iOiIyMDE5LTA1LTA0In0seyJjb2RlIjoiR08iLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifSx7ImNvZGUiOiJQUyIsInBhaWRVcFRvIjoiMjAxOS0wNS0wNCJ9LHsiY29kZSI6IkNMIiwicGFpZFVwVG8iOiIyMDE5LTA1LTA0In0seyJjb2RlIjoiUEMiLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifSx7ImNvZGUiOiJSU1UiLCJwYWlkVXBUbyI6IjIwMTktMDUtMDQifV0sImhhc2giOiI4OTA4Mjg5LzAiLCJncmFjZVBlcmlvZERheXMiOjAsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0

> 修改idea.vmoptions文件, 在文件最底添加如下一行信息, 2018.1.5

-javaagent:JetbrainsCrack-2.10-release-enc.jar

> 修改idea.vmoptions文件, 在文件最底添加如下一行信息, 2018.2.5

-javaagent:JetbrainsCrack-3.1-release-enc.jar

> java 环境配置

JAVA_HOME的位置, 路径记下来
`/usr/libexec/java_home`
输出结果: `sh/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home`

配置profile配置文件
`sudo vim /etc/profile`
输入密码。接下来按i，显示insert，进入输入模式, 路径配置到 JAVA_HOME 里面

```js
JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home"
export JAVA_HOME
CLASS_PATH=i"$JAVA_HOME/lib"
PATH=".$PATH:$JAVA_HOME/bin"
```

然后按esc，进入保存。输入:wq! 保存

运行profile配置文件
`source /etc/profile`

检查环境
`echo $JAVA_HOME`

## window

在“磁盘”中找到已经安装的IntelliJ IDEA目录，进入安装目录中的bin目录，将下载的破解包JetbrainsCrack-2.8-release-enc.jar复制到bin目录中
修改idea.exe.vmoptions、idea64.exe.vmoptions两个文件（也就是上图中蓝色框的2个文件），用编辑器打开
在两个文件最底部分别添加如下一行信息：
-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA 2018.1.4\bin\JetbrainsCrack-2.8-release-enc.jar

> 激活窗口上选择Activation Code并输入以下注册码 2018.1.5
