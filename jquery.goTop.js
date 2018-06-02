/**
 * jquery.goTop 返回顶部插件 v0.1
 * 作者：nekoleamo
 */
;
(function ($, window, document) {
  $.fn.goTop = function (options) {
    var defaults = {
      scrollTop: 100,
      scrollSpeed: 1000,
      fadeInSpeed: 1000,
      fadeOutSpeed: 500
    };
    var options = $.extend(defaults, options);
    var $this = $(this);
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > options.scrollTop) {
        $this.fadeIn(options.fadeInSpeed);
      } else {
        $this.fadeOut(options.fadeOutSpeed);
      }
    })
    $this.on('click', function () {
      $('html,body').animate({
        'scrollTop': 0
      }, options.speed)
    })
  }
})(jQuery, window, document)