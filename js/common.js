// JavaScript Document
$(function() {
    "use strict";
    var obj = {
        init: function() {
            this.toTop();
            this.smoothScroll();
            this.anchorScroll();
            this.iconMenu();
            this.resizeScreen();
			
        },
        //totop
        toTop: function() {
            $("#totop").hide();
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                    $("#totop").removeAttr('style');
                } else {
                    $("#totop").fadeOut();
               
                }
            });
            $("#totop a").click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        //smoothScroll
        smoothScroll: function() {
            $('a[href^="#"]').click(function() {
                var wWidth = $(window).width();
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if (wWidth <= 640) {
                        $('html,body').animate({
                            scrollTop: p.top 
                        }, 600);
                        $('#sp-gnavi').removeClass('open');
                    } else {
                        $('html,body').animate({
                            scrollTop: p.top - 80
                        }, 600);
                    }
                }
                return false;
            });
        },
        // Anchor scroll
        anchorScroll: function() {
            var wWidth = $(window).width();
            var hash1 = location.hash;
            var $root = $('html, body');
            var top01 = $(hash1).offset();
            if (wWidth <= 640) {
                if (hash1 !== "") {
                    $root.animate({
                        scrollTop: top01.top 
                    }, 600);
                }
		
            } else {
                if (hash1 !== "") {
                    $root.animate({
                        scrollTop: top01.top - 80
                    }, 600);
                }
            }
        },
        //sp gnavi
        iconMenu: function() {
            $('.icon_menu').click(function() {
                $(this).toggleClass('active');
                $('#gnavi').slideToggle();
            });
            $(window).bind('resize load', function() {
                var wW = $(window).width();
                if (wW > 640) {
                    $('.icon_menu').removeClass('active');
                    $('#gnavi').removeAttr('style');               
                     $('#mainvisual').removeAttr('style');     
                } else {                 
                   	
                }
            });
        },
        resizeScreen: function() {  
		     $(window).bind('resize load scroll', function() {
             var wW = $(window).width();
                if (wW > 640) {
					$('#header').removeAttr('style');
                    $('#header h1').removeAttr('style');
					} 
				else {				
                    var header = $("#header").position().top + $("#header").innerHeight();					
                    if ($(this).scrollTop() > header) {
                        $('#header h1').css({
                            'display': 'none'
                        });
                        $('#header').css({
                            'padding-top': 10
                        });
                     } else {
                        $('#header h1').removeAttr('style');
                        $('#header').removeAttr('style');						
                    }
					 var mainvi = $("#header").innerHeight();				
					   $('#mainvisual').css({
                            'margin-top': mainvi
                        });
                }
            });

        },
   

    };

    obj.init();
});