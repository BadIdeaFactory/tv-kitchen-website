import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Container from '@material-ui/core/Container';
// import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@src/components/Layout';
import sections from '@src/config/sections';
import withTheme from '@src/themes/withTheme';

// const useStyles = makeStyles(theme => ({}));

const HelpTpl = ({
  data: {
    mdx: { frontmatter },
  },
  children,
  ...props
}) => {
  // const classes = useStyles();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Container component="main" maxWidth="md">
        Hello Help Page
      </Container>
    </Layout>
  );
};

export default withTheme(HelpTpl, sections.help.color);

export const pageQuery = graphql`
  query HelpTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
