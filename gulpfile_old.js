// Include gulp
var gulp = require('gulp'); 

// Include Plugins
var jshint = require('gulp-jshint'),
//var sass = require('gulp-sass');
    concatify = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    imgmin = require('imagemin-jpeg-recompress'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps'),
//    imagemin = require('gulp-imagemin'),
    minifyhtml = require('gulp-minify-html');


//Paths to various files
var paths = {
    scripts: ['js/*.js','bower_components/jquery/dist/jquery.js'],
    styles: ['scss/style.scss','scss/styles/*.scss'],
    images: ['img/**/*'],
    content: ['index.html']
}

// Lint Task
gulp.task('lint', function() {
    gulp.src('js/*.js')
        .pipe(jshint())        .pipe(jshint.reporter('default'));
});


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('js/all.js'))
        .pipe(gulp.dest('public'))
        .pipe(rename('all.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('public/js'));
});

// Concatenate & Minify CSS
gulp.task('cssmin', function() {
    return gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(concat('all.css'))
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('public/css'));
});

// Optimize jpg 
gulp.task('imgmin', function () {
    return gulp.src('images/*.jpg')
        .pipe(imgmin({loops: 3})())
        .pipe(gulp.dest('public/images'));
});

//Connect to local server
gulp.task('webserver', function() {
    connect.server({
//        livereload: true
    });
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('*.scss', ['sass']);
    gulp.watch('css/*.css', ['cssmin']);
    gulp.watch('images/*.jpg', ['imgmin'])
});


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts','cssmin','imgmin', 'webserver', 'watch']);