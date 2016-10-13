function newGame(){
	renderLevel();
}
function nextLevel(){
	level = ++level%5;
	renderLevel();
}
function preLevel(){
	level=(level+4)%5; //避免小于0的判断
	renderLevel();
}
function renderLevel(){
	animated=false;
	setLevel(level);
	//生成地图
	ground.container = ground.container || new createjs.Container(); //合并参数的写法
	ground.container.removeAllChildren();
	ground.container.x = ground.container.y = 0;
	ground.img = ground.img || new createjs.Bitmap(preload.getResult('staticImg'));
	ground.img.sourceRect = new createjs.Rectangle(0, 0, CELL_WIDTH, CELL_HEIGHT);
	for(var i = 0; i < WIDTH; i++){ //此处不能用var in，因为已经为ground加了很多其他属性，下面glod同理
		for(var j = 0; j < HEIGHT; j++){
			if(ground[i][j]){
				var img = ground.img.clone();
				img.x = i * CELL_WIDTH;
				img.y = j * CELL_HEIGHT;
				ground.container.addChild(img);
			}
		}
	}
	//生成目标
	glod.container = glod.container || new createjs.Container();
	glod.container.removeAllChildren();
	glod.container.x = glod.container.y = 0;
	glod.img = glod.img || new createjs.Bitmap(preload.getResult('staticImg'));
	glod.img.sourceRect = new createjs.Rectangle(0, CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
	for(var i = 0; i < WIDTH; i++){
		for(var j = 0; j < HEIGHT; j++){
			if(glod[i][j]){
				var img = glod.img.clone();
				img.x = i * CELL_WIDTH;
				img.y = j * CELL_HEIGHT;
				glod.container.addChild(img);
			}
		}
	}
	if(!ground.shape){ //为false的有：0、-0、null、""、false、undefined 或者 NaN
		stage.addChildAt(ground.container, 0);
		stage.addChildAt(glod.container, 0);
	}
	//生成人
	person.render();
	//生成箱子
	pack.render();
}

function setLevel(l){
	switch (l) {
		case 0 : level1();break;
		case 1 : level2();break;
		case 2 : level3();break;
		case 3 : level4();break;
		case 4 : level5();break;
	}
}
function level1(){
	for (var i = 0; i < WIDTH; i++) {
		ground[i]=[];
		glod[i]=[];
		box[i]=[];
		for (var j = 0; j < HEIGHT; j++) {
			ground[i][j] = 0;
			glod[i][j] = 0;
			box[i][j] = 0;
		}
	}
	for (var i = 4; i < 7; i++) {
		ground[i][0] = 1;
	}
	for (var i = 3; i < 6; i++) {
		ground[0][i] = 1;
	}
	for (var i = 4; i < 7; i++) {
		ground[9][i] = 1;
	}
	for (var i = 3; i < 6; i++) {
		ground[i][9] = 1;
	}
	for (var i = 1; i < 4; i++) {
		ground[i][3] = 1;
		ground[i][5] = 1;
	}
	for (var i = 1; i < 4; i++) {
		ground[(i + 5)][4] = 1;
		ground[(i + 5)][6] = 1;
	}
	for (var i = 1; i < 4; i++) {
		ground[4][i] = 1;
		ground[6][i] = 1;
	}
	for (var i = 1; i < 4; i++) {
		ground[3][(i + 5)] = 1;
		ground[5][(i + 5)] = 1;
	}

	box[5][3] = 1;
	box[3][4] = 1;
	box[6][5] = 1;
	box[4][6] = 1;

	glod[5][1] = 1;
	glod[1][4] = 1;
	glod[4][8] = 1;
	glod[8][5] = 1;
	current = [5, 4];
}

function level2(){
	for (var i = 0; i < WIDTH; i++) {
		ground[i]=[];
		glod[i]=[];
		box[i]=[];
		for (var j = 0; j < HEIGHT; j++) {
			ground[i][j] = 0;
			glod[i][j] = 0;
			box[i][j] = 0;
		}
	}
	for (var i = 4; i < 9; i++) {
		ground[1][i] = 1;
	}
	for (var i = 2; i < 6; i++) {
		ground[i][1] = 1;
	}
	for (var i = 3; i < 9; i++) {
		ground[8][i] = 1;
	}
	for (var i = 2; i < 8; i++) {
		ground[i][8] = 1;
	}
	ground[2][2] = 1;
	ground[2][3] = 1;
	ground[2][4] = 1;
	ground[3][4] = 1;
	ground[3][5] = 1;
	ground[5][4] = 1;
	ground[5][5] = 1;
	ground[6][6] = 1;
	ground[5][2] = 1;
	ground[6][2] = 1;
	ground[7][2] = 1;
	ground[7][3] = 1;

	box[4][3] = 1;
	box[3][6] = 1;
	box[6][7] = 1;

	glod[2][5] = 1;
	glod[2][6] = 1;
	glod[2][7] = 1;

	current = [3, 2];
}
function level3(){
	for (var i = 0; i < WIDTH; i++) {
		ground[i]=[];
		glod[i]=[];
		box[i]=[];
		for (var j = 0; j < HEIGHT; j++) {
			ground[i][j] = 0;
			glod[i][j] = 0;
			box[i][j] = 0;
		}
	}
	for (var i = 1; i < 8; i++) {
		ground[i][2] = 1;
	}
	for (var i = 3; i < 7; i++) {
		ground[9][i] = 1;
	}
	for (var i = 4; i < 8; i++) {
		ground[0][i] = 1;
	}
	for (var i = 1; i < 9; i++) {
		ground[i][8] = 1;
	}
	ground[1][3] = 1;
	ground[1][4] = 1;
	ground[3][4] = 1;
	ground[4][4] = 1;
	ground[5][4] = 1;
	ground[7][3] = 1;
	ground[8][3] = 1;
	ground[5][6] = 1;
	ground[5][7] = 1;
	ground[1][7] = 1;
	ground[8][6] = 1;
	ground[8][7] = 1;

	box[2][4] = 1;
	box[4][5] = 1;
	box[6][6] = 1;
	box[7][5] = 1;

	glod[2][6] = 1;
	glod[2][7] = 1;
	glod[3][6] = 1;
	glod[3][7] = 1;

	current = [3, 3];
}
function level4(){
	for (var i = 0; i < WIDTH; i++) {
		ground[i]=[];
		glod[i]=[];
		box[i]=[];
		for (var j = 0; j < HEIGHT; j++) {
			ground[i][j] = 0;
			glod[i][j] = 0;
			box[i][j] = 0;
		}
	}
	for (var i = 3; i < 10; i++) {
		ground[i][1] = 1;
	}
	for (var i = 2; i < 7; i++) {
		ground[9][i] = 1;
	}
	for (var i = 2; i < 7; i++) {
		ground[2][i] = 1;
	}
	for (var i = 0; i < 9; i++) {
		ground[i][8] = 1;
	}
	ground[0][6] = 1;
	ground[1][6] = 1;
	ground[0][7] = 1;
	ground[2][6] = 1;
	ground[3][2] = 1;
	ground[6][2] = 1;
	ground[6][3] = 1;
	ground[5][5] = 1;
	ground[6][5] = 1;
	ground[6][6] = 1;
	ground[8][6] = 1;
	ground[8][7] = 1;

	box[5][4] = 1;
	box[3][4] = 1;
	box[4][5] = 1;
	box[4][6] = 1;
	box[7][4] = 1;

	for (var i = 1; i < 6; i++) {
		glod[i][7] = 1;
	}

	current = [8, 2];
}
function level5(){
	for (var i = 0; i < WIDTH; i++) {
		ground[i]=[];
		glod[i]=[];
		box[i]=[];
		for (var j = 0; j < HEIGHT; j++) {
			ground[i][j] = 0;
			glod[i][j] = 0;
			box[i][j] = 0;
		}
	}
	for (var i = 3; i < 9; i++) {
		ground[i][2] = 1;
	}
	for (var i = 4; i < 8; i++) {
		ground[0][i] = 1;
	}
	for (var i = 1; i < 6; i++) {
		ground[i][7] = 1;
	}
	for (var i = 5; i < 9; i++) {
		ground[i][8] = 1;
	}
	ground[1][3] = 1;
	ground[1][4] = 1;
	ground[2][3] = 1;
	ground[3][3] = 1;
	ground[5][4] = 1;
	ground[6][4] = 1;
	ground[8][3] = 1;
	ground[9][3] = 1;
	ground[9][4] = 1;
	ground[9][5] = 1;
	ground[8][5] = 1;
	ground[8][6] = 1;
	ground[8][7] = 1;

	glod[1][5] = 1;
	glod[1][6] = 1;
	glod[2][4] = 1;
	glod[2][5] = 1;
	glod[2][6] = 1;

	box[3][5] = 1;
	box[4][4] = 1;
	box[5][5] = 1;
	box[4][6] = 1;
	box[6][6] = 1;

	current = [8, 4];
}