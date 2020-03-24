import webpack from 'webpack';

export const options = {
  modules: {
    mode: 'local',
    localIdentName: '[path][name]__[local]'
  },
  localsConvention: 'camelCase'
};

const loader: webpack.RuleSetLoader = {
  loader: 'css-loader',
  options
};

export default loader;
