import webpack from 'webpack';
import nodeSass from 'node-sass';

export const options = {
  implementation: nodeSass
};

const loader: webpack.RuleSetLoader = {
  loader: 'sass-loader',
  options
};

export default loader;
