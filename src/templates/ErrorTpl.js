import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@src/components/Layout';
import error from '@src/ornaments/error.svg';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(0, 0, 4),
  },
  errorDecor: {
    margin: '0 auto',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
}));

const ErrorTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  const classes = useStyles();

  console.group('ErrorTpl.js');
  console.log(props);
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <main>
        <Container disableGutters style={{ textAlign: 'center' }}>
          <Typography className={classes.title} variant="h1">
            {frontmatter.head.title}
          </Typography>
          <Typography component="p" variant="h4">
            {frontmatter.head.text}
          </Typography>
          <img alt="Error" src={error} className={classes.errorDecor} />
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(ErrorTpl);

export const pageQuery = graphql`
  query ErrorTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        head {
          text
          title
        }
      }
    }
  }
`;
