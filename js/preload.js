/**
 * 这里故意模拟jQuery 无 new 构建方式，没实际意义
 */
(function(window){
	var preload = function(){
		return new preload.prototype.init();
	}
	preload.prototype={
		init:function(){
			//createjs.Sound.initializeDefaultPlugins();
			this.initData();
			this.render();
			//createjs.Sound.alternateExtensions = ["wav"];
			this.queue = new createjs.LoadQueue(true);
			this.queue.installPlugin(createjs.Sound);
			this.queue.on("progress", this.update.bind(this)); //改变上下文
			this.queue.on("complete", this.complete);
			this.queue.loadManifest(this.manifest);
		},
		initData:function(){
			this.manifest = [
				{src:"img/person.png", id:"personImg"},
				{src:"img/static.png", id:"staticImg"},
				{src:"sound/box.mp3", id:"boxS"}, //换成MP3格式，可以支持IE
				{src:"sound/car.mp3", id:"carS"},
				{src:"sound/cheers.mp3", id:"cheersS"}
			];
		},
		getResult:function(name){
			return this.queue.getResult(name);
		},
		render:function () {
			var outline = new createjs.Shape();
			outline.graphics.beginStroke("red");
			outline.graphics.drawRect(0, 0, 100, 40);
			this.bar = new createjs.Shape();
			this.bar.graphics.beginFill("green");
			this.bar.graphics.drawRect(0, 0, 100, 40);
			this.bar.scaleX = 0;
			this.bar.x = outline.x = 150;
			this.bar.y = outline.y = 180;
			stage.addChild(this.bar, outline);
	    },
	    update:function () {
	    	var perc = this.queue.progress;
			perc = perc > 1 ? 1 : perc;
			this.bar.scaleX = perc;
		},
		complete:function(){
			stage.removeAllChildren();
			person = new person();
			pack = new pack();
			//生成关卡
			renderLevel();
			//添加事件
			window.onkeydown = handleKeyDown;
		}
	}
	preload.prototype.init.prototype=preload.prototype;
	window.pre = preload;
})(window);