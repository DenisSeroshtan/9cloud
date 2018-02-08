//preloader

$(function () {
  $('.js-lastWord').each(function() {
    var $this = $(this);
    // добавляем к последнему слову в выражении span
    $this.html($this.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
  });
  $('.js-firstWord').each(function() {
    var $this = $(this);
    // добавляем к первому слову в выражении span
    $this.html($this.html().replace(/^(\S+)/, '<span>$1</span>'));
  });

  // стилизация select
  $("#js-select").SumoSelect({
    search: true,
    searchText: 'Search'
  });

  (function () {
    $('.slider__list').slick({
      arrows : false,
      dots: true,
      dotsClass: "slider__dots",
      autoplay: true,
      autoplaySpeed: 5000
    });
  })();
});

// hidden text in section blog
(function(){
  $('.post-link__hide').on('click', function (e) {
    e.preventDefault();
    var
        $this = $(this),
        container = $this.closest('.post-content'),
        contentShow = container.find('.js-content__show'),
        contentShowText = contentShow.text(),
        textSpace = contentShowText.replace( /\.{3,}$/, ' '),
        textDots = contentShowText.replace(/ $/, '...'),
        contentHide = container.find('.js-content__hide');

    contentHide.toggleClass("hidden");

    if (!contentHide.hasClass('hidden')) {
      $this.text('Hide')
      contentShow.text(textSpace);
    }else {
      $this.text('Read more')
      contentShow.text(textDots);
    }
  })

})();

(function () {

  $('a[href^="#js"]').on('click', function(e) {
      e.preventDefault();

      var
          $this = $(this),
          target = $this.attr('href'),
          hTarget = $(target).offset().top,
          duration = 1500;

      $('html,body').animate({
          scrollTop : hTarget
      }, duration)

  });

})();

(function() {
  // fixed menu to scroll
  var
      header = $('.header'),
      hHeader = header.outerHeight(),
      nav = $('.header-top'),
      hNav = nav.outerHeight();

  $(document).on('scroll', function(e) {
    var
        $this = $(this),
        hScroll = $this.scrollTop();

    if(hScroll > hHeader) {
      nav.addClass('fixed');
      header.css("paddingTop", hNav);
    }else {
      nav.removeClass('fixed');
      header.removeAttr('style');
    }

  });
})();



