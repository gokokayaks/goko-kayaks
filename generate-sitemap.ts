const xml = require('xml');
const { writeFileSync } = require('fs');

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const date = new Date();
const created = `Aug 28 2022`;
const lastModified = `${month[date.getMonth()]} ${date.getDate()} ${date.getUTCFullYear()}`;
const domain = `https://gokokayaks.com/`;

const pages = [
  {
    title: 'Goko Home Page',
    created,
    lastModified,
    slug: domain,
  },
].reduce((acc, currPage) => {
  const page = {
    url: [{ loc: currPage.slug }, { lastmod: lastModified }],
  };
  acc.push(page);
  return acc;
}, []);

const sitemap = xml({
  urlset: [
    {
      _attr: {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      },
    },
    ...pages,
  ],
});

writeFileSync('./sitemap.xml', sitemap, 'utf8');
