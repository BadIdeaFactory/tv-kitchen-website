import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Container from '@material-ui/core/Container';
// import makeStyles from '@material-ui/core/styles/makeStyles';

import Headline from '@src/components/Headline';
import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import config from '@src/config';
import withTheme from '@src/themes/withTheme';

// const useStyles = makeStyles(theme => ({}));

const PartnersTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  // const classes = useStyles();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <main>
        <Container disableGutters>
          <Headline title={frontmatter.head.title} text={frontmatter.head.text} />
          <Separator silent />
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(PartnersTpl, config.sections.partners.color);

export const pageQuery = graphql`
  query PartnersTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        head {
          title
          text
        }
      }
    }
  }
`;
