import webpack from 'webpack';
import typescript from './rules/typescript';
import scss from './rules/scss';
import htmlWebpackPlugin from './plugins/html-webpack-plugin';

const config: webpack.Configuration = {
  entry: {
    main: './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      typescript,
      scss
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ]
};

export default config;
