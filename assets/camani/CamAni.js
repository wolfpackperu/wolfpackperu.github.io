(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4131").s().p("Av+GeQAIlxCNlZQB1kdDXjLQDPjEEJhaQEKhZEWAiQEjAlECCnQmygmlaCDQlmCIkTFCQj+EpiDGZQhrFQgoHXQhtl8AIlZg");
	this.shape.setTransform(-29,-25.6,0.718,0.718);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-107.4,147,163.6);


// stage content:
(lib.CamAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99,89.2,0.357,0.357,0,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4131").s().p("AhRJ7QhYgmhEhFQhEhEglhZQgmhbAAhjQAAhkAnhaQAlhZBFhEQBDhFBZglQBbgnBlAAQBkAABbAmQBZAmBFBEQBFBEAlBZQAnBcAABlQgBBkgnBcQglBYhEBEQhFBEhZAlQhbAnhlAAQhlAAhcgogAgQjkQhMAYg+A0QhLA+gpBWQgnBSgCBcQgCBbAjBVQAlBXBIBBQBzBpCiAIIA9gHQAkgFAYgHQBvgiBJhHQBMhLAhhyQAjh3gchrQgchohUhYQg4g7hKghQhHgghPgEIgWgBQhDAAhAAVgAHrIoQBHhJAnhdQAphhAAhqQAAhqgphhQgohfhIhJQhJhKhfgpQhigqhsAAQhsAAhhApQhfAohJBJQhJBJgoBeQgqBhgBBsQAABrApBiQAnBdBHBJImCAAQhLAAgjggQgjggAAhGIAApFIAAAAIAAgDIAAgBQAGg+AGgeQANg/ATgXQAVgaA9gbQA4gZApgGQArgHB7ABQCAABAggEQAqgGAlgfQAXgVAigwQAmg2ARgSQAiglAlgMQApgOBaAHQBTAGAgAOQA5AZAkAmQAKALAUAbQAVAbAQARQAMgKAJgMIAMgQQAHgIAOgCQARgDAfADQB0AMAoAtQACACgLAdQgLAdACAEQACAGAQAFIAjAGQAxAJAGAWQAcBkgEEkIgGDnQgFCIAAAxQgBBFg5AgQgzAdhXAAg");
	this.shape.setTransform(87.6,71);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,75,159.1,135);
// library properties:
lib.properties = {
	id: '9068D353FB5F2A46881F299FDFAAFE98',
	width: 176,
	height: 143,
	fps: 29,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9068D353FB5F2A46881F299FDFAAFE98'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;