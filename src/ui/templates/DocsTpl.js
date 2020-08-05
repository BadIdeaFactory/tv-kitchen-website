import React, { useState } from 'react';
import _ from 'lodash';
import { Link as GatsbyLink } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '@ui/components/Layout';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function DocsTpl({ children, ...props }) {
  const classes = useStyles();

  const pageFrontmatter = props.pageContext.frontmatter;

  const [open, setOpen] = useState(pageFrontmatter.section || null);

  return (
    <StaticQuery
      query={graphql`
        query DocsTplQuery {
          allSitePage(filter: { path: { regex: "/docs/" } }) {
            edges {
              node {
                id
                path
                context {
                  frontmatter {
                    score
                    section
                    title
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          allSitePage: { edges: allDocsPages },
        } = data;

        const sections = _.groupBy(allDocsPages, o => o.node.context.frontmatter.section);

        console.group('DocsTpl');
        console.log({ sections });
        console.log({ props });
        console.groupEnd();

        return (
          <Layout>
            <div className={classes.root}>
              <SwipeableDrawer
                anchor="left"
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                variant="permanent">
                <div className={classes.toolbar} />
                <List>
                  {Object.keys(sections).map((section, i) => {
                    const pages = _.orderBy(sections[section], o => o.node.context.score || 0, 'desc');
                    return [
                      section !== 'null' ? (
                        <ListItem
                          button
                          key={`x${i}`}
                          onClick={() =>
                            setOpen(prevState => {
                              return prevState === section ? null : section;
                            })
                          }>
                          <ListItemText primary={section} />
                          {open === section ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                      ) : null,
                      <Collapse in={open === section} timeout="auto" unmountOnExit key={`y${i}`}>
                        <List component="div" disablePadding>
                          {pages.map(({ node }) => {
                            const { frontmatter } = node.context;
                            return (
                              <ListItem
                                button
                                className={classes.nested}
                                component={GatsbyLink}
                                key={node.path}
                                to={node.path}>
                                <ListItemText
                                  inset={false}
                                  primary={frontmatter.title}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                    noWrap: true,
                                  }}
                                />
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>,
                    ];
                  })}
                </List>
              </SwipeableDrawer>
              <Container component="main" maxWidth="md">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link component={GatsbyLink} color="inherit" to="/">
                    TV Kitchen
                  </Link>
                  <Link component={GatsbyLink} color="inherit" to="/docs/">
                    Docs
                  </Link>
                  {pageFrontmatter.section ? (
                    <Link
                      component={GatsbyLink}
                      color="inherit"
                      to={
                        _.orderBy(
                          sections[pageFrontmatter.section],
                          o => o.node.context.frontmatter.score || 0,
                          'desc'
                        )[0].node.path
                      }>
                      {console.log(
                        'SORTER',
                        _.orderBy(sections[pageFrontmatter.section], o => o.node.context.frontmatter.score, 'asc')
                      )}
                      {pageFrontmatter.section}
                    </Link>
                  ) : null}
                  <Typography color="textPrimary">{pageFrontmatter.title}</Typography>
                </Breadcrumbs>
                {children}
              </Container>
            </div>
          </Layout>
        );
      }}
    />
  );
}
