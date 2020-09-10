import React from 'react';
import { Helmet } from 'react-helmet';
import { Link as GatsbyLink, graphql } from 'gatsby';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Headline from '@src/components/Headline';
import Layout from '@src/components/Layout';
import grid from '@src/ornaments/grid-light.svg';
import grill from '@src/ornaments/grill-horizontal-light.svg';
import pot from '@src/ornaments/pot.svg';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  pitch: {
    backgroundImage: `url(${grid})`,
    backgroundPosition: '102% -5%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50% auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '40% auto',
    },
  },
  pitchInner: {
    backgroundImage: `url(${grill})`,
    backgroundPosition: '-1% 101%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25% auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '12% auto',
    },
  },
  ctas: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '& > *': {
      margin: theme.spacing(1, 0),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(1, 1),
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0, 2.5),
      },
    },
  },
  illustrationHolder: {
    textAlign: 'center',
  },
  illustration: {
    height: '200px',
    margin: theme.spacing(0, 0, 5),
    [theme.breakpoints.up('md')]: {
      height: '300px',
      margin: theme.spacing(0, 0, 10),
    },
  },
}));

const HomeTpl = ({
  data: {
    mdx: { frontmatter },
  },
  ...props
}) => {
  const classes = useStyles();

  // console.group('HomeTpl.js');
  // console.log(props);
  // console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <main>
        <div className={classes.pitch}>
          <Container disableGutters className={classes.pitchInner}>
            <Headline title={frontmatter.pitch.title} text={frontmatter.pitch.text}>
              <div className={classes.illustrationHolder}>
                <img alt="Bad Idea Factory Logo" className={classes.illustration} src={pot} />
              </div>
            </Headline>
          </Container>
          <Container disableGutters className={classes.ctas}>
            <Button color="primary" component={GatsbyLink} to={'/about'} size="large" variant="contained">
              Learn more
            </Button>
            <Button size="large" component={GatsbyLink} to={'/docs'} variant="outlined">
              Read the docs
            </Button>
          </Container>
        </div>
      </main>
    </Layout>
  );
};

export default withTheme(HomeTpl);

export const pageQuery = graphql`
  query HomeTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        pitch {
          title
          text
        }
      }
    }
  }
`;
