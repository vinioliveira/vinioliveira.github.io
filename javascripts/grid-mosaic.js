(function ($) {
  "use strict";

  $('.grid').isotope({
    layoutMode: 'packery',
    packery: {
      columnWidth: '.grid-sizer',
      gutter: 0
    },
    itemSelector: '.grid-item',
    percentPosition: true
  });

})(jQuery);


// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

$( function() {

  var $grid = $('.grid');

  // bind filter button click
  var $filterButtonGroup = $('#grid-filter');
  $filterButtonGroup.on( 'click', 'a', function() {
    var filterAttr = $( this ).attr('data-filter');
    // set filter in hash
    location.hash = 'filter=' + encodeURIComponent( filterAttr );
  });

  var isIsotopeInit = true;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    // filter isotope
    $grid.imagesLoaded(function() {
      $grid.isotope({
        itemSelector: '.element-item',
        layoutMode: 'packery',
        // use filterFns
        filter: filterFns[ hashFilter ] || hashFilter
      });
    });
    // set selected class on button
    if ( hashFilter ) {
      $filterButtonGroup.find('.is-checked').removeClass('is-checked');
      $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
    }
  }

  $(window).on( 'hashchange', onHashchange );

  // trigger event handler to init Isotope
  onHashchange();
});
