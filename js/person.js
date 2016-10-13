(function(){
	var person = function(){
		this.init();
	};

	person.prototype = {
		init:function(){
			this.initData();
			this.spritesheet =new createjs.SpriteSheet(this.data);
			this.character =new createjs.Sprite(this.spritesheet,"run");
			this.character.dir=DOWN;
			this.character.regX=this.character.regY=CELL_HEIGHT/2;
			stage.addChild(this.character);
			createjs.Sound.play("carS",0,0,0,-1,.2);
		},
		moveLeft:function(){
			var _this = this;  // 上下文随时可能转换
			animated=true;
			//this.character.play();
			var outtime = 1;
			if(this.character.dir != LEFT){
				outtime = 100;
				createjs.Tween.get(this.character).to({rotation:90},100);
			}
			setTimeout(function(){  // 太精确的定时不要依赖此，会受到其他代码的影响，特别是setInterval是怎么着都不准
				pack.moveLeft(current[0], current[1]);
				createjs.Tween.get(_this.character).to({x:_this.character.x-CELL_WIDTH},200).call(function(){
					current[0]--;
					_this.character.dir = LEFT;
					_this.controllerMove();
				});
			}, outtime);
		},
		moveUp:function(){
			var _this = this;
			animated=true;
			//this.character.play();
			var outtime = 1;
			if(this.character.dir != UP){
				outtime = 100;
				createjs.Tween.get(this.character).to({rotation:180},100);
			}
			setTimeout(function(){
				pack.moveUp(current[0], current[1]);
				createjs.Tween.get(_this.character).to({y:_this.character.y-CELL_HEIGHT},200).call(function(){
					current[1]--;
					_this.character.dir = UP;
					_this.controllerMove();
				});
			}, outtime);
		},
		moveDown:function(){
			var _this = this;
			animated=true;
			//this.character.play();
			var outtime = 1;
			if(this.character.dir != DOWN){
				outtime = 100;
				createjs.Tween.get(this.character).to({rotation:0},100);
			}
			setTimeout(function(){
				pack.moveDown(current[0], current[1]);
				createjs.Tween.get(_this.character).to({y:_this.character.y+CELL_HEIGHT},200).call(function(){
					current[1]++;
					_this.character.dir = DOWN;
					_this.controllerMove();
				});
			}, outtime);
		},
		moveRight:function(){
			var _this = this;
			animated=true;
			//this.character.play();
			var outtime = 1;
			if(this.character.dir != RIGHT){
				outtime = 100;
				createjs.Tween.get(this.character).to({rotation:-90},100);
			}
			setTimeout(function(){
				pack.moveRight(current[0], current[1]);
				createjs.Tween.get(_this.character).to({x:_this.character.x+CELL_WIDTH},200).call(function(){
					current[0]++;
					_this.character.dir = RIGHT;
					_this.controllerMove();
				});
			}, outtime);
		},
		render:function(){
			this.character.x = current[0]*CELL_WIDTH + CELL_WIDTH/2;
			this.character.y = current[1]*CELL_HEIGHT + CELL_HEIGHT/2;
			this.character.play();
		},
		controllerMove:function(){ //用于处理走完之后的逻辑
			//this.character.gotoAndStop(0);
			animated = false;
			if(isOver()){
				createjs.Sound.play("cheersS",0,0,0,0,.5);
				nextLevel();
			}
		},
		initData:function(){
			this.data = {
				images:[preload.getResult('personImg')],
				frames: {"height": CELL_HEIGHT, "count": 3, "width": CELL_WIDTH},
				animations: { run: [0,2]}
			}
		}
	}
	window.person = person;
})();