const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const htmlmin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');

gulp.task('buildHTML', function() {
	return gulp.src('html/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('minihtml'))
		.pipe(livereload());
});


gulp.task('buildCSS', function() {
	return gulp.src('scss/main.scss')
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(concat('index.css'))
		.pipe(gulp.dest('server/public'))
		.pipe(livereload());
});

gulp.task('buildJS', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(babel())
		.pipe(concat('index.js'))
		.pipe(gulp.dest('server/public'))
		.pipe(livereload());
})


// watch all css files for changes
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('scss/*.scss', ['buildCSS']);
	gulp.watch('js/*.js', ['buildJS']);
	gulp.watch('html/*.html', ['buildHTML']);
});

gulp.task('buildProduction', ['buildHTMLProd', 'buildJSProd', 'buildCSSProd']);

gulp.task('buildHTMLProd', function() {
	return gulp.src('html/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('minihtml'))
});

gulp.task('buildCSSProd', function() {
	return gulp.src('scss/main.scss')
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(concat('index.css'))
		.pipe(gulp.dest('server/public'))
});

gulp.task('buildJSProd', function() {
	return gulp.src('js/*.js')
		.pipe(babel())
		.pipe(concat('index.js'))
		.pipe(gulp.dest('server/public'))
})

// The default task (called when you run `gulp` from cli)
// first run buildCSS, then buildJS, and then start watching
gulp.task('default', ['buildCSS', 'buildJS', 'buildHTML','watch']);
