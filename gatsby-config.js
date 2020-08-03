const path = require('path');

module.exports = {
  siteMetadata: {
    title: `TV Kitchen Site`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
          documentation: require.resolve('./src/ui/templates/DocumentationTpl.js'),
        },
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
        name: `documentation`,
        path: `${__dirname}/src/pages/documentation`,
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
  ],
};
