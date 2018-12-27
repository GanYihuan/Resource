# MathRandom

Math.random()函数返回 0 和 1 之间的伪随机数，可能为 0，但总是小于 1，[0,1)

生成 n-m，包含 n 但不包含 m 的整数：

第一步算出 m-n 的值，假设等于 w

第二步 Math.random()\*w

第三步 Math.random()\*w+n

第四步 parseInt(Math.random()\*w+n, 10)

生成 n-m，不包含 n 但包含 m 的整数：​

第一步算出 m-n 的值，假设等于 w

第二步 Math.random()\*w

第三步 Math.random()\*w+n

第四步 Math.floor(Math.random()\*w+n) + 1

生成 n-m，不包含 n 和 m 的整数：

第一步算出 m-n-2 的值，假设等于 w

第二步 Math.random()\*w

第三步 Math.random()\*w+n +1

第四步 Math.round(Math.random()*w+n+1) 或者 Math.ceil(Math.random()*w+n+1)

生成 n-m，包含 n 和 m 的随机数：

第一步算出 m-n 的值，假设等于 w

第二步 Math.random()\*w

第三步 Math.random()\*w+n

第四步 Math.round(Math.random()*w+n) 或者 Math.ceil(Math.random()*w+n)

例子：

生成 800-1500 的随机整数，包含 800 但不包含 1500

复制代码 代码如下:

1500-800 = 700
Math.random()*700
var num = Math.random()*700 + 800;
num = parseInt(num, 10);

只需要简单的四步就可以完成。

补充：
　　 Math.ceil() 返回大于等于数字参数的最小整数(取整函数)，对数字进行上舍入

Math.floor() 返回小于等于数字参数的最大整数，对数字进行下舍入

Math.round() 返回数字最接近的整数，四舍五入
