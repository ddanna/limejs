goog.provide('test.frame1');


goog.require('lime');
goog.require('lime.Circle');
goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.Sprite');
goog.require('lime.fill.Frame');
goog.require('lime.animation.KeyframeAnimation');


test.WIDTH = 600;
test.HEIGHT = 400;


test.start = function() {

	//director
	test.director = new lime.Director(document.body, test.WIDTH, test.HEIGHT);
	test.director.makeMobileWebAppCapable();

	var gamescene = new lime.Scene;
	
	 layer = new lime.Layer();
	gamescene.appendChild(layer);
	
	var sprite = new lime.Sprite().setPosition(200,200).setSize(200,200).setFill(
	    new lime.fill.Frame('assets/nano.png',70,20,105,105).setSize(.5,.5,true).setOffset(.5,.5,true)
	    );
	layer.appendChild(sprite);
	
    // set active scene
    test.director.replaceScene(gamescene);
};


goog.exportSymbol('test.start', test.start);
