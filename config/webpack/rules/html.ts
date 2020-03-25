import webpack from 'webpack';
import html from '../loaders/html-loader';

const rule: webpack.RuleSetRule = {
  test: /\.html$/,
  use: [
    html
  ]
};

export default rule;
