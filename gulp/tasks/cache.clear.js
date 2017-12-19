'use strict';
module.exports = function() {
  $.gulp.task('cache:clear', function(done) {
    return $.gp.cache.clearAll(done);
  });
};