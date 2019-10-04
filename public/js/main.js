//MENU
$('#mobile-times').css('display','none');
$('#mobile-s-times').css('display','none');
$('#mobile-m-times').css('display','none');
$('#mobile-sm-times').css('display','none');
$(".bbb li > a").css("color", "black");

$('.travel-toggle-menu').click(function(e){
	e.preventDefault();
	$('.navbar').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$("div.bbc li a").css("color", "#000");
	$(this).addClass('active-nav');
	$('.travel-toggle-menu > a').css("color", "white");
	$('.destinations-toggle-menu > a').css("color", "black");
	$('.connect-toggle-menu > a').css("color", "black");
	$('.search-toggle-menu > a').css("color", "black");
	$('.deals-toggle-menu > a').css("color", "black");
	$('.blog-toggle-menu > a').css("color", "black");
	$("#black").attr('src',"img/icons/search_black.png");
	$("#black-p").attr('src',"img/icons/profile_black.png");
	$('.mobile-header-nav').slideToggle(500, function(){
		if ($('.mobile-header-nav').is(":visible")) {}
		else if ($('.mobile-header-nav').not(":visible")) {
			$('.navbar').removeClass('bg-on-click');
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$('li').removeClass('active-nav');
			$("body").css("overflow-y", "auto");
			$("#black").attr('src',"img/icons/search_White.png");
			$("#black-p").attr('src',"img/icons/profile_white.png");
			$("#black-account").attr('src',"img/icons/search_black.png");
			$("#black-p-account").attr('src',"img/icons/profile_black.png");
			$("div.bbc li a").css("color", "#000");
		}
	});
	$('.destinations-toggle-menu').removeClass('active-nav');
	$('.destination-header-nav').css('display', 'none');
	$('.connect-toggle-menu').removeClass('active-nav');
	$('.connect-header-nav').css('display', 'none');
	$('.search-toggle-menu').removeClass('active-nav');
	$('.search-header-nav').css('display', 'none');
	$('.deals-toggle-menu').removeClass('active-nav');
	$('.blog-toggle-menu').removeClass('active-nav');
});

$('.destinations-toggle-menu').click(function(e){
	e.preventDefault();
	$('.navbar').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$("li > a").css("color", "black");
	$("div.bbc li a").css("color", "#000");
	$(this).addClass('active-nav');
	$('.travel-toggle-menu > a').css("color", "black");
	$('.destinations-toggle-menu > a').css("color", "white");
	$('.connect-toggle-menu > a').css("color", "black");
	$('.search-toggle-menu > a').css("color", "black");
	$('.deals-toggle-menu > a').css("color", "black");
	$('.blog-toggle-menu > a').css("color", "black");
	$("#black").attr('src',"img/icons/search_black.png");
	$("#black-p").attr('src',"img/icons/profile_black.png");
	$('.destination-header-nav').slideToggle(500, function(){
		if ($('.destination-header-nav').is(":visible")) {}
		else if ($('.destination-header-nav').not(":visible")) {
			$('.navbar').removeClass('bg-on-click');
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$('li').removeClass('active-nav');
			$("body").css("overflow-y", "auto");
			$("#black").attr('src',"img/icons/search_White.png");
			$("#black-p").attr('src',"img/icons/profile_white.png");
			$("#black-account").attr('src',"img/icons/search_black.png");
			$("#black-p-account").attr('src',"img/icons/profile_black.png");
			$("div.bbc li a").css("color", "#000");
		}
	});
	$('.travel-toggle-menu').removeClass('active-nav');
	$('.mobile-header-nav').css('display', 'none');
	$('.connect-toggle-menu').removeClass('active-nav');
	$('.connect-header-nav').css('display', 'none');
	$('.search-toggle-menu').removeClass('active-nav');
	$('.search-header-nav').css('display', 'none');
	$('.deals-toggle-menu').removeClass('active-nav');
	$('.blog-toggle-menu').removeClass('active-nav');
});

$('.connect-toggle-menu').click(function(e){
	e.preventDefault();
	$('.navbar').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$("li > a").css("color", "black");
	$("div.bbc li a").css("color", "#000");
	$(this).addClass('active-nav');
	$('.travel-toggle-menu > a').css("color", "black");
	$('.destinations-toggle-menu > a').css("color", "black");
	$('.connect-toggle-menu > a').css("color", "white");
	$('.search-toggle-menu > a').css("color", "black");
	$('.deals-toggle-menu > a').css("color", "black");
	$('.blog-toggle-menu > a').css("color", "black");
	$("#black").attr('src',"img/icons/search_black.png");
	$("#black-p").attr('src',"img/icons/profile_black.png");
	$('.connect-header-nav').slideToggle(500, function(){
		if ($('.connect-header-nav').is(":visible")) {}
		else if ($('.connect-header-nav').not(":visible")) {
			$('.navbar').removeClass('bg-on-click');
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$('li').removeClass('active-nav');
			$("body").css("overflow-y", "auto");
			$("#black").attr('src',"img/icons/search_White.png");
			$("#black-p").attr('src',"img/icons/profile_white.png");
			$("#black-account").attr('src',"img/icons/search_black.png");
			$("#black-p-account").attr('src',"img/icons/profile_black.png");
			$("div.bbc li a").css("color", "#000");
		}
	});
	$('.travel-toggle-menu').removeClass('active-nav');
	$('.destinations-toggle-menu').removeClass('active-nav');
	$('.search-toggle-menu').removeClass('active-nav');
	$('.search-header-nav').css('display', 'none');
	$('.deals-toggle-menu').removeClass('active-nav');
	$('.blog-toggle-menu').removeClass('active-nav');
});

$('.search-toggle-menu').click(function(e){
	e.preventDefault();
	$('.navbar').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$("li > a").css("color", "black");
	$("div.bbc li a").css("color", "#000");
	$("#black").attr('src',"img/icons/search_black.png");
	$("#black-p").attr('src',"img/icons/profile_black.png");
	$('.search-header-nav').slideToggle(500, function(){
		if ($('.search-header-nav').is(":visible")) {}
		else if ($('.search-header-nav').not(":visible")) {
			$('.navbar').removeClass('bg-on-click');
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$("body").css("overflow-y", "auto");
			$("#black").attr('src',"img/icons/search_White.png");
			$("#black-p").attr('src',"img/icons/profile_white.png");
			$("#black-account").attr('src',"img/icons/search_black.png");
			$("#black-p-account").attr('src',"img/icons/profile_black.png");
			$("div.bbc li a").css("color", "#000");
		}
	});
	$('.travel-toggle-menu').removeClass('active-nav');
	$('.destinations-toggle-menu').removeClass('active-nav');
	$('.connect-toggle-menu').removeClass('active-nav');
	$('.deals-toggle-menu').removeClass('active-nav');
	$('.blog-toggle-menu').removeClass('active-nav');
});

$('.mobile-search-toggle-menu').click(function(e){
	e.preventDefault();
	$('.mobile-nav').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$("li > a").css("color", "black");
	$("div.bbc li a").css("color", "#000");
	$("#black-n").attr('src',"img/icons/search_black.png");
	$("#black-pr").attr('src',"img/icons/profile_black.png");
	$('.mobile-toggle-nav').hide();
	$('#mobile-times').css('display','none');
	$('#mobile-s-times').css('display','none');
	$('.mobile-search-toggle-nav').slideToggle(500, function(){
		if ($('.mobile-search-toggle-nav').is(":visible")) {}
		else if ($('.mobile-search-toggle-nav').not(":visible")) {
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$(".bbb li > a").css("color", "black");
			$("body").css("overflow-y", "auto");
			$("#black-n").attr('src',"img/icons/search_White.png");
			$("#black-pr").attr('src',"img/icons/profile_white.png");
			$('#mobile-times').css('display','none');
			$('#mobile-s-times').css('display','none');
			$('#mobile-bars').css('display','block');
		}
	});
	$('#mobile-s-times').css('display','block');
	$('#mobile-times').css('display','none');
	$('#mobile-bars').css('display','none');
	$('#mobile-sm-times').css('display','block');
	$('#mobile-m-times').css('display','none');
	$('#mobile-m-bars').css('display','none');
});

$('#mobile-bars').click(function(e){
	e.preventDefault();
	$('.mobile-toggle-nav').slideToggle();
	$('#mobile-times').css('display','block');
	$('#mobile-bars').css('display','none');
	$('.mobile-nav').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$(".mobile-nav li > a").css("color", "black");
	$("#black-n").attr('src',"img/icons/search_black.png");
	$("#black-pr").attr('src',"img/icons/profile_black.png");
});
$('#mobile-m-bars').click(function(e){
	e.preventDefault();
	$('.mobile-toggle-nav').slideToggle();
	$('#mobile-m-times').css('display','block');
	$('#mobile-m-bars').css('display','none');
	$('.mobile-nav').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$(".mobile-nav li > a").css("color", "black");
	$("#black-n").attr('src',"img/icons/search_black.png");
	$("#black-pr").attr('src',"img/icons/profile_black.png");
});

$('#mobile-s-times').click(function(e){
	e.preventDefault();
	$('.mobile-search-toggle-nav').hide();
	$('#mobile-times').css('display','none');
	$('#mobile-s-times').css('display','none');
	$('#mobile-bars').css('display','block');
	$('.mobile-nav').removeClass('bg-on-click');
	$("ul > li > a").css("color", "#fff");
	$(".bbb li > a").css("color", "black");
	$('li').removeClass('active-nav');
	$("body").css("overflow-y", "auto");
	$("#black-n").attr('src',"img/icons/search_White.png");
	$("#black-n").attr('src',"img/icons/search_White.png");
	$("#black-pr").attr('src',"img/icons/profile_white.png");
});
$('#mobile-sm-times').click(function(e){
	e.preventDefault();
	$('.mobile-search-toggle-nav').hide();
	$('#mobile-m-times').css('display','none');
	$('#mobile-sm-times').css('display','none');
	$('#mobile-m-bars').css('display','block');
	$('.mobile-nav').removeClass('bg-on-click');
	$("ul > li > a").css("color", "#fff");
	$(".bbb li > a").css("color", "black");
	$('li').removeClass('active-nav');
	$("body").css("overflow-y", "auto");
	$("#black-n").attr('src',"img/icons/search_White.png");
	$("#black-n").attr('src',"img/icons/search_White.png");
	$("#black-pr").attr('src',"img/icons/profile_white.png");
});

$('#mobile-times').click(function(e){
	e.preventDefault();
	$('.mobile-nav').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$(".mobile-nav li > a").css("color", "black");
	$("div.bbc li a").css("color", "#000");
	$('.mobile-search-toggle-nav').hide();
	$('.mobile-toggle-nav').slideToggle(500, function(){
		if ($('.mobile-toggle-nav').is(":visible")) {}
		else if ($('.mobile-toggle-nav').not(":visible")) {
			$('.mobile-travel-nav').hide();
			$('.mobile-destination-nav').hide();
			$('.mobile-connect-nav').hide();
			$('.navbar').removeClass('bg-on-click');
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$(".bbb li > a").css("color", "black");
			$('li').removeClass('active-nav');
			$("body").css("overflow-y", "auto");
			$("#black-n").attr('src',"img/icons/search_White.png");
			$("#black-pr").attr('src',"img/icons/profile_white.png");
			$('#mobile-times').css('display','none');
			$('#mobile-bars').css('display','block');
		}
	});
});
$('#mobile-m-times').click(function(e){
	e.preventDefault();
	$('.mobile-nav').addClass('bg-on-click');
	$("body").css("overflow-y", "hidden");
	$(".mobile-nav li > a").css("color", "black");
	$("div.bbc li a").css("color", "#000");
	$('.mobile-search-toggle-nav').hide();
	$('.mobile-toggle-nav').slideToggle(500, function(){
		if ($('.mobile-toggle-nav').is(":visible")) {}
		else if ($('.mobile-toggle-nav').not(":visible")) {
			$('.mobile-travel-nav').hide();
			$('.mobile-destination-nav').hide();
			$('.mobile-connect-nav').hide();
			$('.navbar').removeClass('bg-on-click');
			$('.mobile-nav').removeClass('bg-on-click');
			$("ul > li > a").css("color", "#fff");
			$(".bbb li > a").css("color", "black");
			$('li').removeClass('active-nav');
			$("body").css("overflow-y", "auto");
			$("#black-n").attr('src',"img/icons/search_White.png");
			$("#black-pr").attr('src',"img/icons/profile_white.png");
			$('#mobile-m-times').css('display','none');
			$('#mobile-m-bars').css('display','block');
		}
	});
});

$('.fa-times').click(function(e){
	e.preventDefault();
	$('.mobile-header-nav').hide();
	$('.destination-header-nav').hide();
	$('.connect-header-nav').hide();
	$('.search-header-nav').hide();
	$('.navbar').removeClass('bg-on-click');
	$('.mobile-nav').removeClass('bg-on-click');
	$("ul > li > a").css("color", "#fff");
	$("div.bbc li a").css("color", "#000");
	$('li').removeClass('active-nav');
	$("body").css("overflow-y", "auto");
});
////////////////////////////////////////////////////////////////////////////
//CHANGING icons//
function blackSearch(){
document.getElementById('black').src='img/icons/search_black.png'
document.getElementById('black-n').src='img/icons/search_black.png'
document.getElementById('black-p').src='img/icons/profile_black.png'
}
function whiteSearch(){
document.getElementById('black').src='img/icons/search_White.png'
document.getElementById('black-n').src='img/icons/search_White.png'
document.getElementById('black-p').src='img/icons/profile_White.png'
document.getElementById('black-pr').src='img/icons/profile_White.png'
}
////////////////////////////////////////////////////////////////////////////
//SCROLL NAVBAR//
$(window).scroll(function() {
var ScrollTop = $(window).scrollTop();
if (ScrollTop > 80) {
$('.navbar-onScroll').addClass('show').css("display","block");
$('.navbar-onScroll').addClass('fadeInDown');
}
else if(ScrollTop < 80){
$('.navbar-onScroll').addClass('show').css("display","none");
$('.navbar-onScroll').removeClass('fadeInDown');
}
});
$(window).load(function() {
$('.mobile-nav-on-scroll').css("display","none");
});
$(window).scroll(function() {
var ScrollTop = $(window).scrollTop();
if (ScrollTop > 80) {
$('.mobile-nav-on-scroll').addClass('show').css("display","block");
$('.mobile-nav-on-scroll').addClass('fadeInDown');
}
else if(ScrollTop < 80){
$('.mobile-nav-on-scroll').addClass('show').css("display","none");
$('.mobile-nav-on-scroll').removeClass('fadeInDown');
}
});



$('.travel-toggle-mobile-menu').click(function(e){
e.preventDefault();
	$('.mobile-travel-nav').show(500);
});
$('.destination-toggle-mobile-menu').click(function(e){
e.preventDefault();
	$('.mobile-destination-nav').show(500);
});
$('.connect-toggle-mobile-menu').click(function(e){
e.preventDefault();
	$('.mobile-connect-nav').show(500);
});

$('#toTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
