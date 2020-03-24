import del from 'del';
import gulp from 'gulp';
import { css } from './files';

const task: gulp.TaskFunction = () => (
  del(css.dts)
);

task.displayName = 'clean:css.d.ts';

export default task;
