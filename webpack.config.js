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
            'Goko Kayaks is a quality kayak tour and rental service. We are a mobile business bringing rentals to you throughout the Tampa Bay Area. We offer an unforgettable Eco-Tour launching right off Gandy Beach, St.Petersburg, and into a whole other Florida!We also offer a Sunset Tour near Shell Key, Paddlesport Instruction Classes, Team-building & Parties. Goko prides itself on values of diversity, sustainability and great customer service. Experience nature & wildlife in the Tampa Bay area. Birds, dolphin, manatee, mangroves and more! Endless summer and adventure. Located in St Petersburg."><meta name="keywords" content="Kayaking st petersburg,Kayaking st pete,Kayaking Clearwater,Kayaking Tampa Bay,Paddleboarding st Pete,paddleboarding Clearwater,paddleboarding Tampa Bay,Best kayaking near me,Best Eco-tour,mangrove kayaking,kayaking Reddington beach,kayaking madeira beach,kayaking Shell Key Preserve,kayaking weedon island,kayaking honeymoon island, kayaking st,pete,kayaking gandy beach,Paddleboard rental,kayak rental,Sunset tour,fun things to do st.pete,kayaking st. Petersburg,team Building,SUP lessons,kayaking lessons,see dolphins,see manatee',
          template: './build/template.html',
        }),
        ...envConfig.plugins,
      ],
    },
    sourceMap: envConfig?.sourceMap ?? false,
  });
};
