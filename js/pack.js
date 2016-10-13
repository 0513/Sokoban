(function(){
	var pack = function(){
		this.init();
	};

	pack.prototype = {
		init:function(){
			this.container = this.container || new createjs.Container();
			this.img = this.img || new createjs.Bitmap(preload.getResult('staticImg'));
			this.img.sourceRect = new createjs.Rectangle(0, CELL_HEIGHT*2, CELL_WIDTH, CELL_HEIGHT);
			stage.addChild(this.container);
		},
		moveLeft:function(x, y){
			var img = this.get(x-1, y);
			if(!img) return;
			img.sourceX = x-2;
			box[(x - 1)][y] = 0;
			box[(x - 2)][y] = 1;
			createjs.Sound.play("boxS",0,200,0,0,.5);
			createjs.Tween.get(img).to({x:img.x-CELL_WIDTH},200);
			var _alpha = 1;
			if(glod[(x - 2)][y]){
				_alpha = 0.5;
			}
			createjs.Tween.get(img).to({alpha:_alpha},200);
		},
		moveUp:function(x, y){
			var img = this.get(x, y-1);
			if(!img) return;
			img.sourceY = y-2;
			box[x][(y - 1)] = 0;
			box[x][(y - 2)] = 1;
			createjs.Sound.play("boxS",0,200,0,0,.5);
			createjs.Tween.get(img).to({y:img.y-CELL_WIDTH},200);
			var _alpha = 1;
			if(glod[x][(y - 2)]){
				_alpha = 0.5;
			}
			createjs.Tween.get(img).to({alpha:_alpha},200);
		},
		moveDown:function(x, y){
			var img = this.get(x, y+1);
			if(!img) return;
			img.sourceY = y+2;
			box[x][(y + 1)] = 0;
			box[x][(y + 2)] = 1;
			createjs.Sound.play("boxS",0,200,0,0,.5);
			createjs.Tween.get(img).to({y:img.y+CELL_WIDTH},200);
			var _alpha = 1;
			if(glod[x][(y + 2)]){
				_alpha = 0.5;
			}
			createjs.Tween.get(img).to({alpha:_alpha},200);
		},
		moveRight:function(x, y){
			var img = this.get(x+1, y);
			if(!img) return;
			img.sourceX = x+2;
			box[(x + 1)][y] = 0;
			box[(x + 2)][y] = 1;
			createjs.Sound.play("boxS",0,200,0,0,.5);
			createjs.Tween.get(img).to({x:img.x+CELL_WIDTH},200);
			var _alpha = 1;
			if(glod[(x + 2)][y]){
				_alpha = 0.5;
			}
			createjs.Tween.get(img).to({alpha:_alpha},200);
		},
		render:function(){//重置关卡
			this.container.removeAllChildren();
			this.container.x = this.container.y = 0;
			for(var i in box){
				for(var j in box[i]){
					if(box[i][j]){
						var img = this.img.clone();
						img.x = i * CELL_WIDTH;
						img.y = j * CELL_HEIGHT;
						img.sourceX = i;//用来标识此img，方便以后查找并移动
						img.sourceY = j;
						this.container.addChild(img);
					}
				}
			}
		},
		get:function(x, y){ //根据坐标，取出相应的箱子
			var imgs = this.container.children;
			for(var i in imgs){
				if(imgs[i].sourceX == x && imgs[i].sourceY == y){
					return imgs[i];
				}
			}
		}
	}
	window.pack = pack;
})();