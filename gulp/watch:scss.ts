import gulp from 'gulp';
import { scss } from './files';

const watch = (task: gulp.TaskFunction) => {
  const _task: gulp.TaskFunction = () => (
    gulp.watch(scss.src, task)
  );
  _task.displayName = `watch:scss > ${task.displayName}`;
  return _task;
};

export default watch;
