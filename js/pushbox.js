var stage = new createjs.Stage("stage");
var person;
var pack;
createjs.Ticker.addEventListener('tick', function(){
	stage.update();
});
createjs.Ticker.setFPS(30);
//预加载
preload = pre();

//键盘按下事件
function handleKeyDown(e){
	if(animated){
		return;
	}
	//var _dir = e ? e.keyCode : dir
	switch (e.keyCode) {
	case UP:
		if (canMove(UP))
			person.moveUp();
		break;
	case LEFT:
		if (canMove(LEFT))
			person.moveLeft();
		break;
	case RIGHT:
		if (canMove(RIGHT))
			person.moveRight();
		break;
	case DOWN:
		if (canMove(DOWN))
			person.moveDown();
		break;
	case 82:newGame();break;
	case 78:nextLevel();break;
	case 80:preLevel();break;
	}
}
