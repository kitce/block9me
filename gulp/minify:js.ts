import gulp from 'gulp';
import gulpUglifyCompose from 'gulp-uglify/composer';
import uglifyJS from 'uglify-js';
import { js } from './files';

const uglify = gulpUglifyCompose(uglifyJS, console);

const task: gulp.TaskFunction = () => (
  gulp.src(js.dist, { base: '.' })
    .pipe(uglify())
    .pipe(gulp.dest('.'))
);

task.displayName = 'minify:js';

export default task;
