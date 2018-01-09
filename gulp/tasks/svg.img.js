'use strict';

module.exports = function() {
  $.gulp.task('svgImg', function() {
    return $.gulp.src($.config.src.svgImg)
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.gp.cheerio({
          parserOptions: { xmlMode: true }
        }))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.gp.svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg"
            }
          }
        }))
        .pipe($.gulp.dest($.config.root + $.config.dist.svgImg))
  })
};