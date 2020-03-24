import gulp from 'gulp';
import buildScss from './build:scss';
import typeCss from './type:css';
import renameCssDts from './rename:css.d.ts';

const task = gulp.series(
  buildScss,
  typeCss,
  renameCssDts
);

task.displayName = 'type:scss';

export default task;
