(function () {
  'use strict';
  $(function () {
    $('.he-form__input')
      .on('focus', function () {
        $(this).siblings('.he-form__label--floating').addClass('he-form__label--floated');
      })
      .on('blur', function () {
        var $this = $(this);
        if ($this.val().length === 0)
          $this.siblings('.he-form__label--floating').removeClass('he-form__label--floated');
      });
  });
})();
