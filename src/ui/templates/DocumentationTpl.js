import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '@ui/components/Layout';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
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

export default function DocumentationTpl({ children, ...props }) {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query DocumentationTplQuery {
          allSitePage(filter: { path: { regex: "/documentation/" } }) {
            edges {
              node {
                id
                path
                context {
                  frontmatter {
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
          allSitePage: { edges: allDocumentationPages },
        } = data;
        return (
          <Layout>
            <div className={classes.root}>
              <SwipeableDrawer
                anchor="left"
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                variant="permanent">
                <div class={classes.toolbar} />
                <List>
                  {allDocumentationPages.map(({ node }) => {
                    return (
                      <ListItem button component={GatsbyLink} key={node.id} to={node.path}>
                        <ListItemText
                          inset={false}
                          primaryTypographyProps={{
                            variant: 'body2',
                            noWrap: true,
                          }}>
                          {node.context.frontmatter.title}
                        </ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </SwipeableDrawer>
              <main>{children}</main>
            </div>
          </Layout>
        );
      }}
    />
  );
}
