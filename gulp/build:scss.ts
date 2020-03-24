import gulp from 'gulp';
import exportTailwind from './export:tailwind';
import sass from './sass';

const task = gulp.series(
  exportTailwind,
  sass
);

task.displayName = 'build:scss';

export default task;
