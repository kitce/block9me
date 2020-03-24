import gulp from 'gulp';
import gulpTypedCssModules from 'gulp-typed-css-modules';
import typedCssModules from 'typed-css-modules';
import { css } from './files';
import { options } from '../config/webpack/loaders/css-loader';

const camelCase = options.localsConvention === 'camelCase';

const task = () => (
  gulp.src(css.src, { base: '.' })
    .pipe(gulpTypedCssModules({
      tcm: typedCssModules,
      quiet: true,
      camelCase
    }))
    .pipe(gulp.dest('.'))
);

task.displayName = 'type:css';

export default task;
