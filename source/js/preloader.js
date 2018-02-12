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

  /*=================
      sumoselect
      https://github.com/HemantNegi/jquery.sumoselect.git
  =================*/

  $("#js-select").SumoSelect({
    search: true,
    searchText: 'Search'
  });
/*=================
    slider slick
    http://kenwheeler.github.io/slick/
=================*/
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
/*=================
    smooth scroll
=================*/
(function () {

  $('a[href^="#js"]').on('click', function(e) {
      e.preventDefault();

      var
          $this = $(this),
          target = $this.attr('href'),
          hTarget = $(target).offset().top,
          duration = 600;

      $('html,body').animate({
          scrollTop : hTarget - 30
      }, duration, function() {
        if($('.nav').css('display') === 'block') {
          $(".nav").slideUp(100, function () {
            $('.hamburger').removeClass('is-active');
            $(this).removeAttr('style');
          });
        }
      });

  });

})();
/*=================
    fixed menu to scroll
=================*/
(function() {
  var
      header = $('.header'),
      hHeader = header.outerHeight(),
      nav = $('.header-top__wrap'),
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
/*=================
 highlighting the active menu item
=================*/
(function(){
  function checkSection() {
    $('header, section[id^=js]').each(function () {
      var
          $this = $(this),
          topEdge = $this.offset().top - 50,
          bottomEdge = topEdge + $this.height(),
          wScroll = $(window).scrollTop(),
          currentId = $this.attr('id'),
          reqLink = $('.nav__item-link').filter('[href="#' +currentId +'"]');


      if (topEdge < wScroll && bottomEdge > wScroll) {
        reqLink.closest(".nav__item").addClass('active')
            .siblings().removeClass('active')
      }
    });
  };

  $(document).on('scroll', checkSection);
})();

/*=================
    hamburger menu
=================*/
(function () {
  $('.hamburger').on('click', function(e) {
      e.preventDefault();

      var
          $this = $(this),
          menu = $this.attr('href');

      if (!$this.hasClass('is-active')) {
        $(menu).slideDown();
        $this.addClass('is-active');
      } else {
        $(menu).slideUp(400, function() {
          $(this).removeAttr('style')
        })
        $this.removeClass('is-active');
      }
  });
  /*=================
      close menu with click document
  =================*/
  $(document).on('click', function(e) {
    var $this = $(e.target);
    var wWidth = $(window).outerWidth();

    var
        slideMenu = $('.nav'),
        container = slideMenu.closest('.header-top__wrap'),
        hamburger = container.find('.hamburger');
    if (!$this.closest('.header-top__wrap').length && wWidth <= 900) {
      slideMenu.slideUp(400, function (){
        var $this = $(this);
        if ($this.css('display') === 'none'){
          $this.removeAttr('style');
        }
      });
      hamburger.removeClass('is-active');
    }
  });
})();



