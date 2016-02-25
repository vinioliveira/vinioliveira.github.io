jQuery(document).ready(function($){
  var scrolling = false;
  var contentSections = $('section'),
    verticalNavigation = $('.nav-fixed'),
    navigationItems = verticalNavigation.find('a'),
    navTrigger = $('.cd-nav-trigger'),
    scrollArrow = $('.cd-scroll-down');

  $(window).on('scroll', checkScroll);

  //smooth scroll to the selected section
  verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
      event.preventDefault();
        smoothScroll($(this.hash));
    });

  // open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
      event.preventDefault();
      verticalNavigation.toggleClass('open');
    });

  function checkScroll() {
    if( !scrolling ) {
      scrolling = true;
      (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
    }
  }

  function updateSections() {
    var halfWindowHeight = $(window).height()/2,
      scrollTop = $(window).scrollTop();
    contentSections.each(function(){
      var section = $(this),
        sectionId = section.attr('id'),
        navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
      ( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
        ? navigationItem.parent().addClass('sida-bar-active')
        : navigationItem.parent().removeClass('sida-bar-active');
    });
    scrolling = false;

  }

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          1000
        );
  }

  $('.main-banner__arrow-down').click(function(event){
    event.preventDefault();
    smoothScroll($('#services'));
  })

});

// Change header bg on scroll
//----------------------------------------------------------------
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.main-header').addClass('main-header--fixed');
    }
    else{
        $('.main-header').removeClass('main-header--fixed');
    }
});

//
