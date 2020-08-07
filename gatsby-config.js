const path = require('path');
const remarkNormalizeHeadings = require('remark-normalize-headings');
const remarkSqueezeParagraphs = require('remark-squeeze-paragraphs');

module.exports = {
  siteMetadata: {
    title: `TV Kitchen`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/ui/assets'),
        },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          docs: require.resolve('./src/ui/templates/DocsTpl.js'),
          partners: require.resolve('./src/ui/templates/PartnersTpl.js'),
          press: require.resolve('./src/ui/templates/PressTpl.js'),
        },
        remarkPlugins: [remarkNormalizeHeadings, remarkSqueezeParagraphs],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/pages/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `help`,
        path: `${__dirname}/src/pages/help`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners`,
        path: `${__dirname}/src/pages/partners`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press`,
        path: `${__dirname}/src/pages/press`,
      },
    },
  ],
};
