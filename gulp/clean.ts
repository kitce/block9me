import gulp from 'gulp';
import cleanDist from './clean:dist';
import cleanCss from './clean:css';
import cleanCssDts from './clean:css.d.ts';
import cleanScssDts from './clean:scss.d.ts';

const task = gulp.parallel(
  cleanDist,
  cleanCss,
  cleanCssDts,
  cleanScssDts
);

task.displayName = 'clean';

export default task;
