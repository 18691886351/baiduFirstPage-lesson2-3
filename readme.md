##还原www.baidu.com页面##
#2016-5-21#
基本完成了页面，遇到以下几个问题。
1.如果不使用图片能做一个箭头，类似百度首页上的“设置”的弹出下拉菜单的一个箭头。
2.在实现“更多产品”弹出菜单时，页面发生了轻微的向右移动，而百度原页面没有。
3.如果能快速去掉图片的白色背景。

#2016-5-23#
1.发现紧挨在body顶端的div的margin,会顶出body，所以使用了怪异盒模型解决这个问题。
在chrome和firefox浏览器都发现这个问题。