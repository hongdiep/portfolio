// JavaScript Document
$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.toTop();
            this.smoothScroll();
            this.iconMenu();
            this.countPortofio();
           // this.initWow();

        },
        //totop
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $("#totop").fadeIn();
                    $("#totop").removeAttr('style');
                } else {
                    $("#totop").fadeOut();

                }
            });
            $("#totop a").click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        },
        //smoothScroll
        smoothScroll: function () {
            $('a[href^="#"]').click(function () {
                var wWidth = $(window).width();
                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if (wWidth <= 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 20
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
        anchorScroll: function () {
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
        iconMenu: function () {
            $('.icon_menu').click(function () {
                $(this).toggleClass('active');
                $('nav').slideToggle();
            });
            $(window).bind('resize load', function () {
                var wW = $(window).width();
                if (wW > 640) {
                    $('.icon_menu').removeClass('active');
                    $('nav').removeAttr('style');
                    $('#mainvisual').removeAttr('style');
                } else {

                }
            });
            $('nav a[href^="#"]').click(function () {
                $('nav').removeAttr('style');
                $('.icon_menu').removeClass('active');
            });

        },

        countPortofio: function () {
            var count = 0;
            count = $('.list_portofio li').length;
            $('.list_portofio').addClass('count_' + count);
        },
        initWow: function () {
            if ($(".wow").length > 0) {
                new WOW().init();
            }
        },

    };

    obj.init();
});
