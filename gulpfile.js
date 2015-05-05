var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var path = require( 'path' );
var exec = require( 'gulp-exec' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );

// Compile less files to a css file
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

// Compile html partials to an index file
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

// Watch html or less changes and recompile
gulp.task( 'watch', [ 'html', 'less' ], function () {
    gulp.watch( './src/html/*.html', [ 'html' ] );
    gulp.watch( './src/less/*.less', [ 'less' ] );
});

// Copy built assets to dist folder
gulp.task( 'dist', function () {
    gulp.src( './src/images/**/*' )
        .pipe(
            gulp.dest( './dist/images/' ));
    gulp.src( './src/fonts/**/*' )
        .pipe(
            gulp.dest( './dist/fonts/' ));
    gulp.src( './src/css/build.css' )
        .pipe(
            rename( 'uikit.css' ))
        .pipe(
            gulp.dest( './dist/css/' ));
});

// Watch for changes by default
gulp.task( 'default', [ 'watch' ] );