var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var path = require( 'path' );
var exec = require( 'gulp-exec' );
var concat = require( 'gulp-concat' );
 
gulp.task( 'less', function () {
    gulp
        .src( './src/less/build.less' )
        .pipe(
            less({
                paths: [ 'less' ]
            }))
        .pipe(
            gulp.dest( './src/css/' ));
});

gulp.task( 'default', function () {
    gulp.run( 'less' );

    gulp.watch( './src/less/*.less', function ( event ) {
        gulp.run( 'less' );
    });
});

gulp.task( 'html', function () {
    gulp
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

gulp.task( 'watch-html', function () {
    gulp.run( 'html' );

    gulp.watch( './src/html/*.html', function ( event ) {
        gulp.run( 'html' );
    });
});
