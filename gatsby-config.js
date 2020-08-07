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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`work sans\:400,500,600,700`, `roboto\:400,400i,700`, `roboto mono\:400`],
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          about: require.resolve('./src/ui/templates/AboutTpl.js'),
          docs: require.resolve('./src/ui/templates/DocsTpl.js'),
          help: require.resolve('./src/ui/templates/HelpTpl.js'),
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
