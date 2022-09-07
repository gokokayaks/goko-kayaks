const { MiniCssExtractPlugin, HtmlWebpackPlugin } = require('javascript-project-scripts');
const webpackConfig = require('javascript-project-scripts/webpack.config');
const path = require('path');

module.exports = ({ NODE_ENV = 'production' } = {}) => {
  const envConfig = require(`./build/${NODE_ENV}-config`);

  return webpackConfig({
    mode: NODE_ENV,
    config: {
      entry: './src/index.tsx',
      output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: `bundle.min.css`,
        }),
        new HtmlWebpackPlugin({
          title: 'Goko Kayaks',
          description:
            'Goko Kayaks is a mobile kayak tour & rental service in the Tampa Bay Area. Unforgettable Eco-Tours, Sunset Tours, Instruction classes & Team-building. Goko prides itself on great customer service. Experience nature, mangroves, birds, dolphin, manatee & explore areas such as St Petersburg and Shell Key!',
          canonical: 'https://www.gokokayaks.com',
          template: './build/template.html',
        }),
        ...envConfig.plugins,
      ],
    },
    sourceMap: envConfig?.sourceMap ?? false,
  });
};
