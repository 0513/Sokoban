/**常量*/
var level = 0;
var ground = []; //地图
var glod = []; //目标地点
var box = []; //箱子
var WIDTH = 10; //横向个数
var HEIGHT = 10; //纵向个数
var CELL_WIDTH = 40; //宽度，单位px
var CELL_HEIGHT = 40; //高度，单位px
var current = [0, 0]; //当前位置
var groundColor = "grey";
var glodColor = "green";
var boxColor = "red";
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;
var animated=false;//是否正在执行动画
//var lastKey;
var preload;//预加载对象

ground.isBlocked = function(i, j){ //js可在任意变量上直接定义属性或方法，不推荐
	return ground[i][j] == 1;
}
box.isBlocked = function(i, j){
	return box[i][j] == 1;
}
glod.isBlocked = function(i, j){
	return glod[i][j] == 1;
}
//是否成功
function isOver() {
	var over = true;
	for (var i = 0; i < WIDTH; i++) {
		for (var j = 0; j < HEIGHT; j++) {
			if ((glod.isBlocked(i, j)) && (!box.isBlocked(i, j))){
				over = false;
			}
		}
	}
	return over;
}
//是否可移动
function canMove(keycode){
	var b = true;
	var x = current[0];
	var y = current[1];
	switch (keycode) {
	case UP: //上
		if (ground.isBlocked(x, y - 1)){
			b = false;
		}else if (box.isBlocked(x, y - 1)) {
			if ((ground.isBlocked(x, y - 2)) || (box.isBlocked(x, y - 2))){
				b = false;
			}
		}

		break;
	case LEFT: //左
		if (ground.isBlocked(x - 1, y)){
			b = false;
		}else if (box.isBlocked(x - 1, y)) {
			if ((ground.isBlocked(x - 2, y)) || (box.isBlocked(x - 2, y))){
				b = false;
			}
		}

		break;
	case RIGHT: //右
		if (ground.isBlocked(x + 1, y)){
			b = false;
		}else if (box.isBlocked(x + 1, y)) {
			if ((ground.isBlocked(x + 2, y)) || (box.isBlocked(x + 2, y))){
				b = false;
			}
		}

		break;
	case DOWN: //下
		if (ground.isBlocked(x, y + 1)){
			b = false;
		}else if (box.isBlocked(x, y + 1)) {
			if ((ground.isBlocked(x, y + 2)) || (box.isBlocked(x, y + 2))){
				b = false;
			}
		}

		break;
	}

	return b;
}