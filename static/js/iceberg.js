$(function() {

    // menu MOBILE
  
    $('.burger-menu').click(function(e) {
      $('.menu-mobile').slideDown();
      e.preventDefault();
    });
  
    $('.close-menu').click(function(e) {
      $('.menu-mobile').slideUp();
      e.preventDefault();
    });
  
    $('.menu-mobile ul').onePageNav({
      end : function() {
        $('.menu-mobile').slideUp();
      }
    });
  
    // slider folio
  
    $('.slider').slick({
      slidesToShow : 3,
      slidesToScroll : 1,
      autoplay : true,
      pauseOnHover : true,
      dots : true,
      infinite : false,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  
    // tilt effect
  
    if($(window).innerWidth() > 768) {
      $('.card').tilt({
        scale : 1.1,
        glare : true,
        maxGlare : 0.5
      });
    }
  
    // one page nav
  
    $('#menu').onePageNav();
  
    // scroll a propos
  
    $('.go').click(function(e) {
      var elem = $('#skills');
      $('html, body').animate({ scrollTop : elem.offset().top }, 750);
      e.preventDefault();
    });
  
    // header change
  
    $(window).scroll(function() {
      var Hscroll = $(this).scrollTop();
      if( Hscroll > 300 ) {
        $('header').addClass('fix-white');
      } else {
        $('header').removeClass('fix-white');
      }
      var opScroll = Hscroll / 500;
      $('.logo').css({ opacity : 1 - opScroll });
    });
  
  });
  