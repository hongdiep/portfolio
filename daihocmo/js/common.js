// JavaScript Document
$(function() {
  "use strict";
  var obj = {
    init: function() {
      this.smoothScroll();
      this.toTop();
      this.iconMenu();

    },
    //smoothScroll
    smoothScroll: function() {
      $('a[href^="#"]').click(function() {
        if ($($(this).attr('href')).length) {
          var p = $($(this).attr('href')).offset();
          if ($(window).width() > 640) {
            $('html,body').animate({
              scrollTop: p.top - 120
            }, 600);
          } else {
            $('html,body').animate({
              scrollTop: p.top - 80
            }, 600);
          }
        }
        return false;
      });
      $(window).load(function() {
        var hash1 = location.hash;
        var $root = $('html, body');
        if (hash1 !== "") {
          var top01 = $(hash1).offset().top;
          if ($(window).width() > 640) {
            $root.animate({
              scrollTop: top01 - 120
            }, 600);
          } else {
            $root.animate({
              scrollTop: top01 - 80
            }, 600);
          }
        }
      });
    },
    //totop
    toTop: function() {
      $("#totop").hide();
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $("#totop").fadeIn();
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
    //sp gnavi
    iconMenu: function() {
      $('.icon_menu.open').click(function() {
        $('.icon_menu.closes').toggleClass('active');
        $('.icon_menu.open').fadeOut();
        $('#gnavi').slideToggle();
      });
      //button closes
      $('.icon_menu.closes').click(function() {
        $('.icon_menu.closes').toggleClass('active');
        $('.icon_menu.open').fadeIn();
        $('#gnavi').slideToggle();
        $('#gnavi .sub_menu').removeAttr('style');
        $('.gnavi_pc > li > span').removeClass('active');
      });
      $('#gnavi .has > span').click(function() {
        if ($(this).hasClass('flag')) {
          $(this).toggleClass('active');
          $(this).next('.sub_menu').slideToggle();
        }
      });

      /**/
      $(window).on("load resize", function() {
        var sw = $(window).width();
        $('.has > span').removeClass('active');
        if (sw > 750) {
          $('.sub_menu').removeAttr('style');
          $('#gnavi .has > span').removeClass('flag');
          $('.icon_menu').removeClass('active');
          $('#gnavi').removeAttr('style');
        } else {
          $('#gnavi .has > span').addClass('flag');
        }
      });
    },
    /*add lazy img*/
    lazy_img: function() {
      $('img,iframe').each(function() {
        $(this).attr('loading', 'lazy');
      });
    },

  };
  obj.init();
});