/*

Template Name: Myway
Template Demo: http://awerest.com/demo/myway
Purchase: http://themeforest.net/item/myway-onepage-bootstrap-parallax-retina-template/4058880?ref=awerest
Author: Awerest
Author website: http://awerest.com
Description: Parallax Retina Bootstrap Multipurpose Template
Tags: Responsive, Mobile First, Retina, Bootstrap 3, One Page, Multi Page, Multi-Purpose, Agency, Clean, Creative, Minimal

Version: 2.0

---------------

Table of Contents:

1) Fix for Internet Explorer 10 in Windows 8 and Windows Phone 8
2) Animated elements
3) Custom Scrollbar
4) Carousels
5) Intro section height
6) Contact form
7) SVG FTW!
8) Google map
9) Collapse menu on click
10) Responsive videos
11) Smooth Scroll on Anchors
12) Preloader
13) Href # Fix for Demo

---------------

*/

$(document).ready(function() {
	'use strict';

/* ==== 1) Fix for Internet Explorer 10 in Windows 8 and Windows Phone 8 ==== */

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}

/* ==== 2) Animated elements ==== */
/* after all images are loaded and if it's no-touch device, run script */
	imagesLoaded(document.body, function(){
		if ($('.no-touch').length) {
			skrollr.init({
				smoothScrolling: false,
				forceHeight: false
			});
/* see docs - if logo over image is not visible due to light/dark color, change logo image on scroll */
/* append css to logo image div, change width and height to match your logo size 
			$('.navbar-brand div').css({'width':'123px', 'height':'20px'});*/
		}
/* if touch device detected, append image logo
		else $(".navbar-brand").append("<img src='img/logo.png' alt='logo' class='img-responsive'>")*/
	});

/* ==== 3) Custom Scrollbar ==== */
/* see docs and how to use custom scrollbar */
/*
	$('html, .modal').niceScroll({
		scrollspeed: 60,
		mousescrollstep: 35,
		cursorwidth: 10,
		cursorborder: 0,
		cursorcolor: '#e3e4e5',
		cursorborderradius: '3px',
		autohidemode: false,
		horizrailenabled: false,
		smoothscroll: false,
	});
*/

/* ==== 4) Carousels ==== */
//intro text slider
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	})
//works sliders
	$('#carousel-1, #carousel-2 #carousel-3').carousel({
		interval: false
	})

/* ==== 5) Make intro section height of viewport / Min height is set to 445px in style.css ==== */

	$(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro .item').css({'height':($(window).height())+'px'});
		});
	});

/* ==== 6) Contact form ==== */

	$('.flowuplabels').FlowupLabels({
		feature_onInitLoad: false, 
		class_focused: 'focused',
		class_populated: 'populated' 
	});

	var options = {
		target: '.message .alert',
		beforeSubmit: showRequest,
		success: showResponse
	};

	$('#contactForm').ajaxForm(options);
	function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
			return true;
		}
	function showResponse(responseText, statusText) {
		}

/* ==== 7) SVG FTW! ==== */

	var url ='css/streamline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='css/simpleline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='css/social-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

/* ==== 7) Gallery lightbox ==== */

	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});

/* ==== 8) Google map ==== */

	$(".gmap").gMap({
		controls: {
           panControl: false,
           zoomControl: true,
           mapTypeControl: false,
           scaleControl: false,
           streetViewControl: false,
           overviewMapControl: false
		},
		scrollwheel: false,
		draggable: true,
		markers: [{ latitude: 45.256,
					longitude: 19.845
				}],
		icon: { image: "img/map-pin.png",
				iconsize: [32, 48],
				iconanchor: [16, 24],
				infowindowanchor: [0, 0]
			},
		latitude: 45.256,
		longitude: 19.845,
		zoom: 15
	});

});

$(window).load(function() {
	'use strict';

/* ==== 9) Collapse menu on click on mobile and tablet devices ==== */

	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () { $(".navbar-collapse").collapse("hide") });
	}

/* ==== 10) Responsive videos ==== */

	$('.fit-video').fitVids();

/* ==== 11) Smooth Scroll on Anchors ==== */

	$.localScroll.hash();
	$('.scroll-btn, #more, .hidden-xs, .nav, .navbar-header, #footer li').localScroll({
		target: 'body',
		queue: true,
		duration: 1000,
		hash: false,
		offset: -60,
		easing: 'easeInOutExpo'
	});

/* ==== 12) Preloader ==== */

	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut('slow');

/* ==== 13) Href # Fix for Demo ==== */

	$('a[href="#"]').click(function() {
		return false;
	});


    /* XML Director */
    Hyphenator.config({
            classname : 'hyphenate',
            defaultlanguage: 'en',
            minwordlength: 8,
            donthyphenateclassname : 'header'
    });
    Hyphenator.run();
});
