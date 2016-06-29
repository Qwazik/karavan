"use strict"

var gulp        = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass        = require('gulp-sass'),
	prefixer	= require('gulp-autoprefixer'),
	imagemin	= require('gulp-imagemin'),
	pngquant	= require('imagemin-pngquant'),    
    notify      = require("gulp-notify"),
    zip         = require('gulp-zip'),
    jade 		= require('jade'),
    gulpJade 	= require('gulp-jade'),
    reload		= browserSync.reload;


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
        	baseDir: './',
            index: 'index.html'
        },
        stream: true,
        notify: false
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(['jade/*.jade', 'jade/includes/*.jade'], ['jade']);
    gulp.watch('contacts.html', reload);
    //gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")  
        .pipe(sass())
        .on("error", notify.onError({
            message: "Ошибка: <%= error.message %>",
            title: "Ошибка запуска"}))
        .pipe(prefixer({
        	browsers: ['ie 8', 'last 15 versions']
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('jade', function() {
  gulp.src('jade/*.jade')
    .pipe(gulpJade({
      jade:jade,
      pretty: true
    }))
    .on("error", notify.onError({
            message: "Ошибка: <%= error.message %>",
            title: "Ошибка запуска"}))
    .pipe(gulp.dest(''))
});

gulp.task('img', function() {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img'));
});

gulp.task('finish', ['img'], function() {
    return gulp.src('**')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest(''));

});

gulp.task('default', ['serve']);
