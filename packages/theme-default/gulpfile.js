/*
 * @Description: 
 * @version: 1.1.0
 * @Author: wqq
 * @Date: 2020-12-08 15:46:49
 * @LastEditors: wqq
 * @LastEditTime: 2020-12-10 10:10:20
 */
let gulp = require('gulp');

const { series } = require('gulp');

let watch = require('gulp-watch');

let postcss = require('gulp-postcss');
let cssmin = require('gulp-cssmin');
let salad = require('postcss-salad')(require('./salad.config.json'));

function compile(cb) {
  return gulp.src('./src/**/*.css')
    .pipe(postcss([salad]))
    // .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
}

function copyfont(cb) {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
}

function watchTest() {
  watch('./src/**/*.css', function () {
    compile()
  });
}

exports.build = series(compile, copyfont);
exports.watchTest = watchTest;

