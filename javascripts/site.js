var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

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

    $(".video").click(function() {
      $.fancybox({
        'padding'   : 0,
        'autoScale'   : false,
        'transitionIn'  : 'none',
        'transitionOut' : 'none',
        'title'     : this.title,
        'width'     : 640,
        'height'    : 385,
        'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        'type'      : 'swf',
        'swf'     : {
        'wmode'       : 'transparent',
        'overlayColor'    : "#000000",
        'allowfullscreen' : 'true'
        }
      });

      return false;
    });

  }


  function slideCase(){
        /* Work cycle */
    var t = {
        $el: $("#carousel-slider .slideshow"),
        clickImage: function (e) {
          var t = $(e.target),
              n = t.index(),
              i = t.parent().find(".cycle-slide-active").index();
          return this.cycle(n == i ? "prev" : "next"), !1
        },
        makeFirstSlideCentered: function () {
            this.$el.prepend(this.$el.find("img:last").remove())
        },
        init: function () {
            this.makeFirstSlideCentered(), this.$el.cycle({
              fx: "carousel",
              paused: !0,
              carouselVisible: 3,
              carouselFluid: !0,
              swipe: !0,
              next: '#carousel-slider-next',
              prev: '#carousel-slider-prev'
            }), this.$el.on("click", "img", $.proxy(this.clickImage, this.$el)).find("img").css("opacity", "")
        }
      };
      t.init();
  }

  function valideForm(){
    $('form').each(function(){
      if(language == 'PT'){
        $(this).validate({
          errorClass: 'he-form--error',
          messages: {
            Field43: "Esse campo é obrigatório.",
            Field44: "Esse campo é obrigatório.",
            Field3: "Informe um e-mail válido.",
            Field16: "Esse campo é obrigatório.",
            Field41: "Esse campo é obrigatório.",
            Field52: "Esse campo é obrigatório.",
          },
        });
      }else{
        $(this).validate({
          errorClass: 'he-form--error'
        });
      }
    })
  }

  function player(){
    if(!isMobile){
      $(".player").YTPlayer();
      $(".player").removeClass('main-banner__bg--mobile');
    }else{
      $(".player").addClass('main-banner__bg--mobile');
    }
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
    slideCase();
    valideForm();
    player();
  }

  init();

})(jQuery);
