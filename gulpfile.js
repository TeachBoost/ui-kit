var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var path = require( 'path' );
var exec = require( 'gulp-exec' );
var concat = require( 'gulp-concat' );
 
gulp.task( 'less', function () {
    return gulp
        .src( './src/less/build.less' )
        .pipe(
            less({
                paths: [ 'less' ]
            }))
        .pipe(
            gulp.dest( './src/css/' ));
});

gulp.task( 'html', function () {
    return gulp
        .src([
            './src/html/header.html',
            './src/html/colors.html',
            './src/html/buttons.html',
            './src/html/icons.html',
            './src/html/position.html',
            './src/html/tables.html',
            './src/html/cards.html',
            './src/html/forms.html',
            './src/html/notifications.html',
            './src/html/footer.html' ])
        .pipe(
            concat( 'index.html' ))
        .pipe(
            gulp.dest( './' ));
});

gulp.task( 'watch', [ 'html', 'less' ], function () {
    gulp.watch( './src/html/*.html', [ 'html' ] );
    gulp.watch( './src/less/*.less', [ 'less' ] );
});

gulp.task( 'default', [ 'watch' ] );