
var gulp = require('gulp')
var rename = require('gulp-rename')
var cleanCSS = require('gulp-clean-css')
var postcss = require('gulp-postcss')
var partialImport = require('postcss-partial-import')
var cssnext = require('postcss-cssnext')
var autoprefixer = require('autoprefixer')

const styleVariables = require('./src/styleVariables')
const mediaQueries = require('./src/mediaQueries')

gulp.task('css', function() {
  var processors = [
    partialImport(),
    cssnext({
      browsers: ['> 1%'],
      features: {
        customProperties: {
          variables: styleVariables,
        },
        customMedia: {
          extensions: mediaQueries,
        },
      },
    })
  ]

  return gulp.src('./src/main.css')
            .pipe(postcss(processors))
            .pipe(rename('fiber.css'))
            .pipe(gulp.dest('./css'))
})

gulp.task('css-build', function() {
  var processors = [
    partialImport(),
    cssnext({
      browsers: ['> 1%'],
      features: {
        customProperties: {
          variables: styleVariables,
        },
        customMedia: {
          extensions: mediaQueries,
        },
      },
    }),
  ]

  gulp.src('./src/**/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./css/modules'))
})

gulp.task('css-production', function() {
  var processors = [
    partialImport(),
    cssnext({
      browsers: ['> 1%'],
      features: {
        customProperties: {
          variables: styleVariables,
        },
        customMedia: {
          extensions: mediaQueries,
        },
      },
    })
  ]

  return gulp.src('./src/main.css')
            .pipe(postcss(processors))
            .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(rename('fiber.min.css'))
            .pipe(gulp.dest('./css'))
})

gulp.task('default', function() {
  gulp.watch('./src/**/*.css', ['css'])
})
