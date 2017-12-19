'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch($.config.src.js, $.gulp.series('js:process'));
    $.gulp.watch($.config.src.style, $.gulp.series('sass'));
    $.gulp.watch([$.config.template, $.config.content], $.gulp.series('pug'));
    $.gulp.watch($.config.src.img, $.gulp.series('images'));
    $.gulp.watch($.config.src.fonts, $.gulp.series('fonts'));
    $.gulp.watch('./source/svg/**/*.*', $.gulp.series('sprite:svg'));
  });
};
