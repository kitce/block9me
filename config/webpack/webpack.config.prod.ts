import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common';
import miniCssExtractPlugin from './plugins/mini-css-extract-plugin';

const scss: webpack.RuleSetRule = {
  test: /\.s?css$/,
  use: [
    MiniCssExtractPlugin.loader
  ]
};

/* Configuration */
const prod: webpack.Configuration = {
  mode: 'production',
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.join(process.cwd(), '/dist')
  },
  module: {
    rules: [
      scss
    ]
  },
  plugins: [
    miniCssExtractPlugin
  ],
  optimization: {
    minimize: false
  },
  stats: {
    colors: true
  }
};

const strategy = {
  'module.rules.use': 'prepend' as merge.MergeStrategy
};
const config = merge.smartStrategy(strategy)(common, prod);

export default config;
