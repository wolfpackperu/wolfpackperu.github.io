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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4131").s().p("AougKICsglIgEEIIheAVgAj7hMIC6gpIgDEIIi7AogABFiSIC7goIgEEHIi6AogAGHjYIBegVIBKD3IisAmg");
	this.shape.setTransform(55.9,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,111.8,47.5), null);


// stage content:
(lib.CLAQUETAWeb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// claqueta.ai
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(15.6,78,0.999,0.999,14.3,0,0,0.8,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:55.9,regY:23.8,scaleX:1,scaleY:1,rotation:11.3,x:74.3,y:65.6},0).wait(1).to({rotation:8.3,x:73.5,y:62.5},0).wait(1).to({rotation:5.3,x:72.7,y:59.5},0).wait(1).to({rotation:2.3,x:71.6,y:56.6},0).wait(1).to({rotation:-0.7,x:70.5,y:53.7},0).wait(1).to({rotation:-3.7,x:69.1,y:50.8},0).wait(1).to({rotation:-6.7,x:67.6,y:48.1},0).wait(1).to({rotation:-9.7,x:66,y:45.4},0).wait(1).to({rotation:-12.7,x:64.2,y:42.8},0).wait(1).to({rotation:-15.7,x:62.3,y:40.3},0).wait(1).to({rotation:-13.6,x:63.7,y:42.1},0).wait(1).to({rotation:-11.4,x:65,y:43.9},0).wait(1).to({rotation:-9.3,x:66.2,y:45.8},0).wait(1).to({rotation:-7.1,x:67.4,y:47.7},0).wait(1).to({rotation:-5,x:68.5,y:49.6},0).wait(1).to({rotation:-2.9,x:69.5,y:51.6},0).wait(1).to({rotation:-0.7,x:70.5,y:53.7},0).wait(1).to({rotation:1.4,x:71.3,y:55.7},0).wait(1).to({rotation:3.6,x:72.1,y:57.8},0).wait(1).to({rotation:5.7,x:72.8,y:60},0).wait(1).to({rotation:7.9,x:73.4,y:62.1},0).wait(1).to({rotation:10,x:74,y:64.3},0).wait(1).to({rotation:12.2,x:74.5,y:66.5},0).wait(1).to({rotation:14.3,x:74.8,y:68.7},0).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4131").s().p("AocFoIAArPIQ5AAIAALPgAmdiPIM7AAIAAhlIs7AAg");
	this.shape.setTransform(75.7,115.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.9,114.9,119.9,119.7);
// library properties:
lib.properties = {
	id: '287B9C63CB7D1D45AF270EE94F67D544',
	width: 150,
	height: 166,
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
an.compositions['287B9C63CB7D1D45AF270EE94F67D544'] = {
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