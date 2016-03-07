(function () {
  'use strict';
  $(function () {
    $(".dropdown__button").click(function () {
      var $button, $menu;
      $button = $(this);
      $menu = $button.siblings(".dropdown__menu");
      $menu.toggleClass("dropdown__menu--show");
      $button.toggleClass('dropdown__button--opened');
      $menu.children(".dropdown__menu-item").click(function () {
        $('#budget').val($(this).data("value"));
        $button.removeClass('dropdown__button--opened');
        $menu.removeClass("dropdown__menu--show");
        $button.html($(this).html());
      });
    });
  });
})();
