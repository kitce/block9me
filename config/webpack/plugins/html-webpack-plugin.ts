import HtmlWebpackPlugin from 'html-webpack-plugin';

const plugin = new HtmlWebpackPlugin({
  template: './src/main.html'
});

export default plugin;
