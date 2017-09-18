var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};

gulp.task('beginClean', function () {
    return del(['./app/tmp/sprite', './app/assets/img/sprites']);
});

gulp.task('createSprite', ['beginClean'], function () {
    return gulp.src("./app/assets/img/icons/**/*.svg")
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/tmp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function () {
    return gulp.src('./app/tmp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/img/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function () {
    return gulp.src('./app/tmp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/css/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function () {
    return del('./app/tmp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'], function () {

});