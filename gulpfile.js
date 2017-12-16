const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => {
    gulp.src('scripts/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format()) 
        .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
    gulp.watch('scripts/**/*.js', ['eslint']);
});

gulp.task('default', ['eslint', 'watch']);
