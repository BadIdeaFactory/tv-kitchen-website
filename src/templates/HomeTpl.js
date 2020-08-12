import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Container from '@material-ui/core/Container';
// import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@src/components/Layout';
import withTheme from '@src/themes/withTheme';

// const useStyles = makeStyles(theme => ({}));

const HomeTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  // const classes = useStyles();

  console.group('HomeTpl.js');
  console.log(props);
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <Container component="main" maxWidth="md">
        Hello Home Page
      </Container>
    </Layout>
  );
};

export default withTheme(HomeTpl);

export const pageQuery = graphql`
  query HomeTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
