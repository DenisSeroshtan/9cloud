'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.config.src.style)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      // .pipe($.gsmq())
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write('./'))
      .pipe($.gulp.dest($.config.root + $.config.dist.css))
      .pipe($.browserSync.reload({stream:true}));
  })
};
