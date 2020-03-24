import gulp from 'gulp';
import gulpRename from 'gulp-rename';
import { css } from './files';

const renamer = (path) => {
  const basename = path.basename;
  path.basename = basename.replace('.css.d', '.scss.d');
};

const task: gulp.TaskFunction = () => (
  gulp.src(css.dts, { base: '.' })
    .pipe(gulpRename(renamer))
    .pipe(gulp.dest('.'))
);

task.displayName = 'rename:css.d.ts';

export default task;
