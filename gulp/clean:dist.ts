import del from 'del';
import gulp from 'gulp';
import { dist } from './files';

const task: gulp.TaskFunction = () => (
  del(dist.dir)
);

task.displayName = 'clean:dist';

export default task;
