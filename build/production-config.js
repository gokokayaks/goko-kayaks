const { CopyWebpackPlugin } = require('javascript-project-scripts');

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '_redirects',
          to: '',
        },
        {
          from: 'robots.txt',
          to: '',
        },
        {
          from: 'sitemap.xml',
          to: '',
        },
      ],
    }),
  ],
  sourceMap: false,
};
