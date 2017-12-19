'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: true,
      server: $.config.root,
      notify: false,
      port: 9000
    });

    $.browserSync.watch([
      $.config.root + '/**/*.*',
      '!**/*.css',
      '!**/*.css.map'],
      $.browserSync.reload
    );
  });
};
