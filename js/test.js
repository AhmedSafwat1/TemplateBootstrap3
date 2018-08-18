/*global $*/
$(function () {
	"use strict";
	$(".carousel").carousel({
		interval : 6000
	});
	$(".gearcheck").click(function () {
		$(".color-option").fadeToggle(2000);
	});
	$(".color-option ul li").css("cursor", "pointer");
	$(".color-option ul li").eq(0).css("background", "#E41B17");
	$(".color-option ul li").eq(1).css("background", "#0a88b9");
	$(".color-option ul li").eq(2).css("background", "#31ca60");
	$(".color-option ul li").eq(3).css("background", "#e218d3");
	$(".color-option ul li").eq(4).css("background", "#8a6d3b");
	$(".color-option ul li").click(function () {
		$("link[href*='Them']").attr("href", $(this).attr("value"));
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 750) {
			$(".mybutton_top .btn-block").fadeIn(1000);
		} else {
			$(".mybutton_top .btn-block").fadeOut(1000);
		}
	});
    $(".mybutton_top").click(function () {
		$("html,body").animate({
		    scrollTop : 0
		}, 600);
    });
	//$("html").niceScroll();
});
//loading screen
$(window).load(function () {
	"use strict";
	
	$(".spiner").fadeOut(2000, function () {
		$("body").css({
			overflow : 'auto',
			overflowX : 'hidden'
		});
		$(this).parent().fadeOut(2000, function () {
			$(this).remove();
		});
		
		
	});
});