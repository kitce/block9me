import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const plugin = new MiniCssExtractPlugin({
  filename: '[name].bundle.[hash].css'
});

export default plugin;
