import gulp from 'gulp';
import bundle from './bundle';
import minify from './minify';

const task = gulp.series(
  bundle,
  minify
);

task.displayName = 'build';

export default task;
