module.exports = function() {
  $.gulp.task('js:transit', function() {
    return $.gulp.src($.config.pathTransit)
        .pipe($.gulp.dest($.config.root + $.config.dist.js))
  })
};
