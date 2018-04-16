// Include Gulp
var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('app/css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
	gulp.src('app/js/*.js')
	.pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
	gulp.src('app/*.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('img', function() {
	gulp.src('app/img/*.jpg')
	.pipe(gulp.dest('dist/img'));
});

// Copy all files to dist folder
gulp.task('copy', ['css', 'js', 'html', 'img']);

// Serve and reload on changes to html and js files
gulp.task('serve', ['copy'], function() {
	gulp.watch('app/*.html', ['html']);
	gulp.watch('app/js/*.js', ['js']);
	gulp.watch('app/scss/*.scss', ['css']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
	gulp.watch('app/scss/*.scss').on('change', browserSync.reload);
	browserSync.init({
		serve: {
			baseDir: 'app'
		},
	})
});
