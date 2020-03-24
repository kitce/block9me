import gulp from 'gulp';
import gulpPostcss from 'gulp-postcss';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import { scss } from './files';

gulpSass.compiler = nodeSass;

const task: gulp.TaskFunction = () => (
  gulp.src(scss.src, { base: '.' })
    .pipe(gulpSass({
      includePaths: ['node_modules']
    }).on('error', gulpSass.logError))
    .pipe(gulpPostcss())
    .pipe(gulp.dest('.'))
);

task.displayName = 'sass';

export default task;
