import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../config/webpack/webpack.config.dev';

const { devServer, stats, watchOptions } = config;
const options: WebpackDevServer.Configuration = {
  ...devServer,
  stats,
  watchOptions
};

WebpackDevServer.addDevServerEntrypoints(config, options);

const task: gulp.TaskFunction = () => {
  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, options);
  const port = options.port as number;
  server.listen(port);
};

task.displayName = 'dev:server';

export default task;
