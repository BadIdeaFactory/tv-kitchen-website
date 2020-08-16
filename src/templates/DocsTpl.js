import React, { useState } from 'react';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { Link as GatsbyLink } from 'gatsby';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@src/components/Copy';
import Layout from '@src/components/Layout';
import config from '@src/config';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  head: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  content: {
    // borderLeft: `5px solid ${theme.palette.divider}`,
    // padding: theme.spacing(1),
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(2),
    // },
  },
}));

const DocsTpl = ({
  data: {
    mdx: { body, frontmatter },
    allMdx,
  },
  ...props
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(frontmatter.section || null);

  const rootPagePath = 'content/docs/index.mdx';
  const chapters = _.groupBy(allMdx.edges, ({ node }) => node.frontmatter.section);
  const loosePages = _.filter(chapters.null, ({ node }) => !node.fileAbsolutePath.endsWith(rootPagePath));
  const rootPage = _.find(allMdx.edges, ({ node }) => node.fileAbsolutePath.endsWith(rootPagePath));

  console.group('DocsTpl.js');
  console.log({ allMdx });
  console.log({ body });
  console.log({ chapters });
  console.log({ frontmatter });
  console.log({ loosePages });
  console.log({ props });
  console.log({ rootPage });
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{`${config.sections.docs.title}: ${frontmatter.title}`}</title>
      </Helmet>
      <main>
        <Container disableGutters maxWidth="md">
          <Grid container spacing={6} wrap="nowrap">
            <Grid item xs={12} md={4}>
              <List dense>
                <ListSubheader>Docs</ListSubheader>
                <ListItem button component={GatsbyLink} to={`/${rootPage.node.slug}`}>
                  <ListItemText
                    primary={rootPage.node.frontmatter.title}
                    primaryTypographyProps={{ color: 'primary' }}
                  />
                </ListItem>
                {loosePages.map(page => {
                  return (
                    <ListItem button component={GatsbyLink} to={`/${page.node.slug}`} key={page.node.id}>
                      <ListItemText
                        primary={page.node.frontmatter.title}
                        primaryTypographyProps={{ color: 'primary' }}
                      />
                    </ListItem>
                  );
                })}
                {Object.keys(chapters).map(key => {
                  if (key === 'null') return null;
                  const chapterPages = chapters[key];
                  const list = (
                    <List component="div" dense disablePadding key={key}>
                      {chapterPages.map(({ node }) => {
                        const { frontmatter, id, slug } = node;
                        const { title } = frontmatter;
                        if ('/doc/'.includes(slug)) return null;
                        return (
                          <ListItem className={classes.nested} button component={GatsbyLink} key={id} to={`/${slug}`}>
                            <ListItemText
                              inset={false}
                              primary={title}
                              primaryTypographyProps={{
                                color: 'primary',
                                noWrap: true,
                                variant: 'body2',
                              }}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  );
                  return [
                    <ListItem
                      button
                      key={`${key}x`}
                      onClick={() =>
                        setOpen(prevState => {
                          return prevState === key ? null : key;
                        })
                      }>
                      <ListItemText primary={key} primaryTypographyProps={{ color: 'primary' }} />
                      {open === key ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>,
                    <Collapse in={open === key} timeout="auto" unmountOnExit key={`${key}y`}>
                      {list}
                    </Collapse>,
                  ];
                })}
              </List>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className={classes.content}>
                <Container disableGutters className={classes.head}>
                  <Typography className={classes.title} variant="h2" component="h1">
                    {frontmatter.title}
                  </Typography>
                </Container>
                <Copy>
                  <MDXProvider>
                    <MDXRenderer>{body}</MDXRenderer>
                  </MDXProvider>
                </Copy>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(DocsTpl, config.sections.docs.color);

export const pageQuery = graphql`
  query DocsTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        section
        title
      }
      body
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "content/docs/.*.mdx/" } }
      sort: { fields: [slug, frontmatter___score], order: [ASC, DESC] }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          slug
          frontmatter {
            score
            section
            title
          }
        }
      }
    }
  }
`;
