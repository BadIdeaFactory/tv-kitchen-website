import React, { useState } from 'react';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { Link as GatsbyLink } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@src/components/Copy';
import Layout from '@src/components/Layout';
import sections from '@src/config/sections';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const DocsTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  const classes = useStyles();

  // const [open, setOpen] = useState(_frontmatter.section || null);

  // console.group('DocsTpl.js');
  // console.log({ _frontmatter });
  // console.log({ children });
  // console.log({ props });
  // console.groupEnd();

  return <Layout {...props}>{frontmatter.title}</Layout>;
};

export default withTheme(DocsTpl, sections.docs.color);

export const pageQuery = graphql`
  query DocsTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
