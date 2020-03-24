import gulp from 'gulp';
import gulpCleanCSS from 'gulp-clean-css';
import { css } from './files';

const task: gulp.TaskFunction = () => (
  gulp.src(css.dist, { base: '.' })
    .pipe(gulpCleanCSS())
    .pipe(gulp.dest('.'))
);

task.displayName = 'minify:css';

export default task;
