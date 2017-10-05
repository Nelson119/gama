'use strict';
/*eslint-disable new-cap, no-unused-vars,
	no-use-before-define, no-trailing-spaces, space-infix-ops, comma-spacing,
	no-mixed-spaces-and-tabs, no-multi-spaces, camelcase, no-loop-func,no-empty,
	key-spacing ,curly, no-shadow, no-return-assign, no-redeclare, no-unused-vars,
	eqeqeq, no-extend-native, quotes , no-inner-declarations*/
/*global  $, jQuery, TweenMax */
var app = {};
app.partial = {};

if($ || jQuery){
	app.$ = $.noConflict() || jQuery.noConflict();
}
(function($){
	$(function(){
		
		// 定義每個元件
		$.each(app.partial, function(name, init){
			init($);
		});
		app.imageReload.init();
	
	
		app.imageReload.callback = function(){
			$('[role=main]').trigger('page:update:main');
			if($(window).width() > 1000){
				if($.fn.mCustomScrollbar){
					$('.custom-scroll').mCustomScrollbar({
						autoDraggerLength: false
					});
				}
			}else{
				if($.fn.mCustomScrollbar){
					$('.custom-scroll').mCustomScrollbar('destroy');
				}
			}
			try{
				$('.frame .slick').slick('resize');
				// imagePreload.refresh();
			}catch(e){}
		};
		var scrolling = 0;
		$(window).on('scroll', function(){
			var offsetTop = $('#header').offset().top + $('#header').outerHeight();
			if($(window).scrollTop() > offsetTop){
				$('[role=main]').addClass('fixed-menu');
				$('[role=main]').css('padding-top', $('[role=main] header').outerHeight() + 'px');
			} else{
				$('[role=main]').removeClass('fixed-menu');
				$('[role=main]').css('padding-top', 0);
			}
			$('.side-banner').addClass('scrolling');
			clearTimeout(scrolling);
			if($(window).scrollTop() > $('#footer').offset().top - $('.side-banner').height()){
				return;
			}
			scrolling = setTimeout(function(){
				$('.side-banner').removeClass('scrolling');
			}, 500);
		}).trigger('scroll');
		// if(app.utility.getParam('cid')){
		// 	$('a[data-shop]').each(function(){
		// 		$(this).attr('href',$(this).attr('href') + location.search);
		// 	});
		// }
		$('[role=main] nav a').eq(0).on('click', function(){
			TweenMax.to('html, body',0.3,{
				scrollTop: $('[role=main] .items').offset().top - $('[role=main] header').outerHeight()
			});
		});
		$('[role=main] nav a').eq(2).on('click', function(){
			TweenMax.to('html, body',0.3,{
				scrollTop: $('[role=main] .frame').offset().top + $('[role=main] .frame').outerHeight()  - $('[role=main] header').outerHeight()
			});
		});
		
		if(location.hash === '#gift'){
			TweenMax.to('html, body',0.3,{
				scrollTop: $('[role=main] .items').offset().top - $('[role=main] header').outerHeight()
			});
		}
	
	});
}(app.$));




