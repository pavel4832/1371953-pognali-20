const gulp = require('gulp');
const del = require('del');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const less = require('gulp-less');
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin-fix');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const sync = require('browser-sync').create();
const  terser = require('gulp-terser');

// Copy
const copy = () => {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'));
}

exports.copy = copy;

// Clean
const clean = () => {
  return del('build');
}

exports.clean = clean;

// Styles
const styles = () => {
  return gulp.src('source/less/style.less')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());
}

exports.styles = styles;

// SVG sprite
const sprite = () => {
  return gulp.src('build/img/**/icon-*.svg')
    .pipe(svgstore())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
}

exports.sprite = sprite;

// Js
const js = () => {
  return gulp.src('source/js/**/*.js')
    .pipe(terser())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('build/js'));
}

exports.js = js;

// Html
const html = () => {
  return gulp.src([
    'source/*.html'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'));
}

exports.html = html;

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher
const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series('styles'));
  gulp.watch('source/*.html').on('change', sync.reload);
}

exports.default = gulp.series(
  server, watcher
);

// Images
const images = () => {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('source/img'));
}

exports.images = images;

// Webp
const createWebp = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('source/img'));
}

exports.webp = createWebp;

// Build
exports.build = gulp.series (
  clean, copy, styles, js, sprite, html
);
