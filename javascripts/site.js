(function ($) {
  "use strict";

  // Scroll animations with waypoint JS
  //---------------------------------------------------------------
  function onScrollAnimations() {
    $('.main-banner__title').waypoint(function() {
      $('.main-banner__title').addClass('animated fadeIn');
    }, {
      offset: '75%'
    });
    $('.main-banner__subtitle').waypoint(function() {
      $('.main-banner__subtitle').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });
    $('.section-offer__heading').waypoint(function() {
      $('.section-offer__heading').addClass('animated fadeIn');
    }, {
      offset: '75%'
    });
    $('.section-offer__box').waypoint(function() {
      $('.section-offer__box').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });
  }

  // Video - hover animation
  //---------------------------------------------------------------
  function hoverVideoAnimation(){
    var sourceSwap = function () {
      var $this = $(this).find('img');
      var newSource = $this.data('video');
      $this.data('video', $this.attr('src'));
      $this.attr('src', newSource);
    }
    $(function () {
      $('.rollover').hover(sourceSwap, sourceSwap);
    });
  }

  // Scroll to top
  //---------------------------------------------------------------
  function scrollToTop() {
    $('.scroll-top').on( 'click', function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }

  // Typed JS - Main Banner Home
  //---------------------------------------------------------------
  function typed(){
    $("#typed").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 100,
      backDelay: 500,
      loop: true,
      contentType: 'html', // or text
      loopCount: false,
      callback: function(){ foo(); },
      resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
      $("#typed").typed('reset');
    });

    function newTyped(){ /* A new typed object */ }
    function foo(){ console.log("Callback"); }
  }

  // Sliders
  //---------------------------------------------------------------
  function slider(){
    $('.bxblog, .bxtwitter').bxSlider({
      mode: 'fade'
    });
    $('.bxprojects').bxSlider({
      slideMargin: 60
    });
  }

  // Hamburger mobile menu
  //---------------------------------------------------------------
  function mobileMenu(){
    $('.js-toggle-menu').on('click', function(e){
       e.preventDefault();
      $(this).toggleClass('toggle--close');
      $('.navbar-nav').toggleClass('navbar-nav--is-open');
      $('body').toggleClass('main-content-toleft');
      $('.main-header').toggleClass('main-content-toleft');
    });
  }

  // Current Page
  //---------------------------------------------------------------
  function currentPage(){
    var current_page = location.pathname;

    $(".navbar-nav a").each(function(i) {
      if (current_page.indexOf($(this).attr('href')) == 0) {
        $(this).addClass('current-page').parent().addClass("current-li");
        return false
      }
    });
  }

  function sliderTestimonial(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      pager: false,
      nextSelector: '.slider-testimonial__next',
      prevSelector: '.slider-testimonial__prev',
      nextText: (language=='EN' ? 'Next' : 'Próximo'),
      prevText: (language=='EN' ? 'Previous' : 'Anterior'),
      adaptiveHeight: true,
      responsive: true
    });

    $(".fancybox").fancybox({
      'width'           : 650,
      'height'          : 488,
      'scrolling'       : 'no',
      'autoScale'       : false,
      'transitionIn'    : 'none',
      'transitionOut'   : 'none',
      'type'            : 'iframe',
      'overlayColor'    : "#000000",
      'overlayOpacity'  : 0.6
    });
  }

  // Functions
  //---------------------------------------------------------------
  function init() {
    mobileMenu();
    onScrollAnimations();
    slider();
    typed();
    hoverVideoAnimation();
    currentPage();
    sliderTestimonial();
  }

  init();

})(jQuery);
