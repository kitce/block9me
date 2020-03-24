import gulp from 'gulp';
import typeScss from './type:scss';
import watchScss from './watch:scss';
import devServer from './dev:server';

const task = gulp.series(
  typeScss,
  gulp.parallel(
    watchScss(typeScss),
    devServer
  )
);

task.displayName = 'dev';

export default task;
