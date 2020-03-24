import del from 'del';
import gulp from 'gulp';
import { scss } from './files';

const task: gulp.TaskFunction = () => (
  del(scss.dts)
);

task.displayName = 'clean:scss.d.ts';

export default task;
