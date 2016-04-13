(function () {
  'use strict';
  $(function () {
    $('.modal__state').on('change', function () {
      if ($(this).is(':checked')) {
        $('body').addClass('modal--open');
      } else {
        $('body').removeClass('modal--open');
      }
    });

    $('.modal__fade-screen, .modal__close').on('click', function () {
      $('.modal__state').prop('checked', false).change();
    });

    $('.modal__inner').on('click', function (e) {
      e.stopPropagation();
    });
  });
})();
