const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const about = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "content/about/.*.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const docs = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/docs/.*.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const error = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/404.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const help = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/help/.*.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const home = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/index.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const partners = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "content/partners/.*.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  const press = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "content/press/.*.mdx/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  const creators = [
    {
      src: about,
      tpl: path.resolve('src/templates/AboutTpl.js'),
    },
    {
      src: docs,
      tpl: path.resolve('src/templates/DocsTpl.js'),
    },
    {
      src: error,
      tpl: path.resolve('src/templates/ErrorTpl.js'),
    },
    {
      src: help,
      tpl: path.resolve('src/templates/HelpTpl.js'),
    },
    {
      src: home,
      tpl: path.resolve('src/templates/HomeTpl.js'),
    },
    {
      src: partners,
      tpl: path.resolve('src/templates/PartnersTpl.js'),
    },
    {
      src: press,
      tpl: path.resolve('src/templates/PressTpl.js'),
    },
  ];

  /* Create pages */
  creators.forEach(creator => {
    const { src, tpl } = creator;
    src.data.allMdx.edges.forEach(({ node: { slug, id } }) => {
      createPage({
        path: slug || '/',
        component: tpl,
        context: {
          id,
        },
      });
    });
  });
};
