//preloader
window.onload = function() {
  document.querySelector('.wrapper').classList.add('loaded');
};
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
