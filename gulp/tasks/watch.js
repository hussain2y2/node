var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        notify: false, /* It tells the browser not to show any change notification on the right upper corner of the page */
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function () {
        // gulp.start('html');
        browserSync.reload();
    });

    watch('./app/assets/css/**/*.css', function () {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function () { /* cssInject depends on styles task */
    return gulp.src('./app/tmp/css/styles.css')
        .pipe(browserSync.stream());
});