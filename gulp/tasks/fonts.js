module.exports = function() {
  $.gulp.task('fonts', function() {
    return $.gulp.src($.config.src.fonts, { since: $.gulp.lastRun('fonts') })
      .pipe($.gulp.dest($.config.root + $.config.dist.fonts));
  });
};    