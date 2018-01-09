module.exports = {
  root: './build',
  content: './content.json',
  template: './source/template/**/*.pug',
  pathTransit: './source/foundation/svg4everybody.min.js',
  src: {
    pug: './source/template/pages/*.pug',
    style: './source/style/**/*.scss',
    js: './source/js/**/*.js',
    img: './source/img/**/*.*',
    fonts: './source/fonts/**/*.*',
    svgIcon: './source/svg/icon/**/*.svg',
    svgImg: './source/svg/img/**/*.svg'
  },
  dist: {
    css: '/assets/css',
    js: '/assets/js',
    img: '/assets/img',
    fonts: '/assets/fonts',
    svgIcon: '/assets/svg/icon',
    svgImg: '/assets/svg/img'
  },
  autoprefixerConfig: ['last 15 version']
};