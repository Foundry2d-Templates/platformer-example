package;

import kha.Canvas;
import found.App;
import found.State;


class Project extends App {
	public function new(){
		super(function(){
			#if !editor //keepme for easily switching between editor and release mode
			/**
			 *  Add all the scenes you need
			**/
			// State.addState('menu', 'path/to/menu.json');
			// State.addState('play', 'path/to/play.json');
			// State.addState('option', 'path/to/option.json');
			// State.addState('retry', 'path/to/retry.json');
			/**
			 *  Set the current state to be shown(i.e. the scene we want to see)
			**/
			// State.set('play');
			#end
		});
		
	}
	override function render(canvas:Canvas) {
		super.render(canvas);
		
	}
}
