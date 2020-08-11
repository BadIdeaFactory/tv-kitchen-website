const path = require('path');
const remarkNormalizeHeadings = require('remark-normalize-headings');
const remarkSqueezeParagraphs = require('remark-squeeze-paragraphs');

module.exports = {
  siteMetadata: {
    title: `TV Kitchen`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/ui/assets'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`work sans\:400,500,600,700`, `roboto\:400,400i,700`, `roboto mono\:400,500,600`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `storycopter-news`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@ui': path.resolve(__dirname, 'src/ui'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/pages/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/pages/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/ui/templates/DefaultTpl.js'),
        },
        remarkPlugins: [remarkNormalizeHeadings, remarkSqueezeParagraphs],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx-frontmatter',
    },
  ],
};
