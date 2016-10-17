##简介
基于 [createJs](https://github.com/createJs) 做的简单的推箱子游戏，涵盖了createJs的4个基本模块：基础(画图、精灵类等)、声音、动画、预加载
效果如图：
![mahua](http://note.youdao.com/yws/public/resource/008f8407a1dffab4cff6ebfd2a9af920/xmlnote/DC14B50A7EBD41CE9586D52F1E0C2ED1/29958)

##实现逻辑
箱子、目标、地图各是一个二维数组，推箱子的小车是一个坐标，每次推箱子前，分别判断将要到达的位置
* 若为空或者目标，则移至目标位置
* 若为地图，则不动
* 若为箱子，则按照方向，判断箱子的下一个位置，并按前两条将小车和箱子一并处理
每次移动完成，都判断所有箱子的坐标是否与各目标重合，若重合，则通关。

##代码
* /lib: createJs库文件
* /js
    * constants.js 定义常量（因为都是全局变量，所以在任意文件里可直接引用）
    * level.js 定义关卡地图（包括地图、目标，并初始化小车位置）
    * pack.js 箱子
    * person.js 小车（最初想做成小人推箱子，后来发现小人有点难画）
    * preload.js 预加载
    * pushbox.js 综合调用上述所有的类，实现游戏逻辑