import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common';
import style from './loaders/style-loader';
import hotModuleReplacementPlugin from './plugins/hot-module-replacement-plugin';

const scss: webpack.RuleSetRule = {
  test: /\.s?css$/,
  use: [
    style
  ]
};

const dev: webpack.Configuration = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8080
  },
  devtool: 'source-map',
  module: {
    rules: [
      scss
    ]
  },
  plugins: [
    hotModuleReplacementPlugin
  ],
  watchOptions: {
    aggregateTimeout: 500
  },
  stats: 'minimal'
};

const strategy = {
  'module.rules.use': 'prepend' as merge.MergeStrategy
};
const config = merge.smartStrategy(strategy)(common, dev);

export default config;
