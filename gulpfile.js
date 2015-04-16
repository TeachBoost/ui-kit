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
            './src/views/header.phtml',
            './src/views/colors.phtml',
            './src/views/buttons.phtml',
            './src/views/icons.phtml',
            './src/views/position.phtml',
            './src/views/tables.phtml',
            './src/views/cards.phtml',
            './src/views/forms.phtml',
            './src/views/notifications.phtml',
            './src/views/footer.phtml' ])
        .pipe(
            concat( 'index.html' ))
        .pipe(
            gulp.dest( './' ));
});

gulp.task( 'watch-html', function () {
    gulp.run( 'html' );

    gulp.watch( './src/views/*.html', function ( event ) {
        gulp.run( 'html' );
    });
});
