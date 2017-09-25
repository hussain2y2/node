var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify');

gulp.task('deleteDistFolder', function () {
    return del("./docs");
});

gulp.task('optimizeImages', ['deleteDistFolder', 'styles', 'scripts'], function () {
    return gulp.src(['./app/assets/img/**/*', '!./app/assets/img/icons', '!./app/assets/img/icons/**/*'])
        .pipe(imagemin({
            progressive: true, // For JPEG images
            interlaced: true, // For GIF images
            multipass: true // For SVG images
        }))
        .pipe(gulp.dest('./docs/assets/img'));
});

gulp.task('usemin', ['deleteDistFolder'], function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function () { return rev() }, function () { return cssnano() }],
            js: [function () {return rev() }, function () { return uglify() }]
        }))
        .pipe(gulp.dest('./docs'));
});
gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);