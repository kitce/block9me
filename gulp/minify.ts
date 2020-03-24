import gulp from 'gulp';
import minifyJS from './minify:js';
import minifyCSS from './minify:css';

const task = gulp.parallel(
  minifyJS,
  minifyCSS
);

task.displayName = 'minify';

export default task;
