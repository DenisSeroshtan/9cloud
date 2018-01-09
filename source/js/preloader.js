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

  // стилизация select
  $("#js-select").SumoSelect({
    search: true,
    searchText: 'Search'
  });
});