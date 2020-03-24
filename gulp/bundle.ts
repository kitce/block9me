import gulp from 'gulp';
import webpack from 'webpack';
import typeScss from './type:scss';
import webpackProductionConfig from '../config/webpack/webpack.config.prod';

const bundle: gulp.TaskFunction = (done) => {
  const compiler = webpack(webpackProductionConfig);
  compiler.run((err, stats) => {
    if (err) return done(err);
    if (stats.hasErrors()) {
      const info = stats.toJson();
      return done(info.errors);
    }
    const output = stats.toString(webpackProductionConfig.stats);
    console.info(output);
    return done();
  });
};

const task = gulp.series(
  typeScss,
  bundle
);

task.displayName = 'bundle';

export default task;
