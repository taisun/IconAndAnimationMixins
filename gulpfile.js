'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


gulp.task('sass', function () {
    var sassOption = {
        style: 'expanded'
    };
    return $.rubySass('_src/sass/style.scss', sassOption)
            .on('error', function (err) {
                $.notify.onError('Error: <%= err.message %>');
            })
            .pipe($.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.plumber({
                 errorHandler: $.notify.onError("Error: <%= error.message %>")
            }))
            .pipe(gulp.dest('_dest/css'));
});

gulp.task('watch', ['sass'], function () {
    gulp.watch('_src/sass/**/*.scss', ['sass']);
});
