'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global app, Parallax*/
app.partial.theme = function($){
	var container = $('[role="main"]');
	// console.log(app.$ == $);
	container.on('page:update:main' , function(page, menu){
		$('[role=main]').addClass('loaded');
	});
};
