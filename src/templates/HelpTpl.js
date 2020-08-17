import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@src/components/Copy';
import Headline from '@src/components/Headline';
import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import antenna from '@src/ornaments/antenna.svg';
import config from '@src/config';
import glitch from '@src/ornaments/glitch-vertical.svg';
import grid from '@src/ornaments/grid-light.svg';
import grill from '@src/ornaments/grill-horizontal.svg';
import signalBarVertical from '@src/ornaments/signal-bar-vertical.svg';
import withTheme from '@src/themes/withTheme';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: config.mdComponents,
}).Compiler;

const useStyles = makeStyles(theme => ({
  head: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(10),
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  tile: {
    background: '#EAE9E8',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  slackTile: {
    backgroundImage: `url(${signalBarVertical})`,
    backgroundPosition: 'left top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '8px auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '8px auto',
    },
  },
  githubTile: {
    backgroundImage: `url(${grill})`,
    backgroundPosition: '100% -5%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15% auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '20% auto',
    },
  },
  docsTile: {
    backgroundImage: `url(${antenna})`,
    backgroundPosition: '105% 105%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '35% auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '50% auto',
    },
  },
  tileTitle: {
    marginBottom: theme.spacing(1),
  },
  tileText: {
    marginBottom: theme.spacing(2),
  },
  faqsWrapper: {
    backgroundImage: `url(${grid})`,
    backgroundPosition: '-1% -1%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50% auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '33% auto',
    },
  },
  faqs: {
    backgroundColor: 'transparent',
    backgroundImage: `url(${glitch})`,
    backgroundPosition: '104% bottom',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '10% auto',
    marginTop: theme.spacing(8),
    padding: theme.spacing(5, 2.5),
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '97% bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '10% auto',
      padding: theme.spacing(10, 5),
    },
  },
  faq: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(5),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(10),
      },
    },
  },
}));

const HelpTpl = ({
  data: {
    mdx: { frontmatter },
    faq,
  },
  children,
  ...props
}) => {
  const classes = useStyles();

  console.group('HelpTpl.js');
  console.log({ frontmatter });
  console.log({ faq });
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <main>
        <Container disableGutters>
          <Headline title={frontmatter.head.title} text={frontmatter.head.text} />
          <Separator silent />

          <Container disableGutters>
            <Grid container spacing={4} alignContent="stretch">
              <Grid container direction="column" item justify="space-between" md={4} xs={12}>
                <Paper className={`${classes.tile} ${classes.slackTile}`} variant="elevation">
                  <div>
                    <Typography className={classes.tileTitle} component="h3" variant="h4">
                      {frontmatter.slack.title}
                    </Typography>
                    <Typography className={classes.tileText} component="p" variant="body1">
                      {frontmatter.slack.text}
                    </Typography>
                  </div>
                  <Button href={config.elsewhere.slack.url} variant="outlined">
                    {frontmatter.slack.cta}
                  </Button>
                </Paper>
              </Grid>
              <Grid container direction="column" item justify="space-between" md={4} xs={12}>
                <Paper className={`${classes.tile} ${classes.githubTile}`} variant="elevation">
                  <div>
                    <Typography className={classes.tileTitle} variant="h4" component="h3">
                      {frontmatter.github.title}
                    </Typography>
                    <Typography className={classes.tileText} variant="body1" component="p">
                      {frontmatter.github.text}
                    </Typography>
                  </div>
                  <Button variant="outlined">{frontmatter.github.cta}</Button>
                </Paper>
              </Grid>
              <Grid container direction="column" item justify="space-between" md={4} xs={12}>
                <Paper className={`${classes.tile} ${classes.docsTile}`} variant="elevation">
                  <div>
                    <Typography className={classes.tileTitle} variant="h4" component="h3">
                      {frontmatter.docs.title}
                    </Typography>
                    <Typography className={classes.tileText} variant="body1" component="p">
                      {frontmatter.docs.text}
                    </Typography>
                  </div>
                  <Button variant="outlined">{frontmatter.docs.cta}</Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>

          <div className={classes.faqsWrapper}>
            <Paper className={classes.faqs} variant="outlined">
              <Container className={classes.head}>
                <Typography align="center" className={classes.title} variant="h2">
                  {frontmatter.faq.title}
                </Typography>
              </Container>
              <Container maxWidth="sm">
                {faq.edges.map(({ node }) => {
                  const { id, frontmatter, answer } = node;
                  const { question } = frontmatter;
                  return (
                    <div key={id} className={classes.faq}>
                      <Typography variant="h5" component="h3">
                        {question}
                      </Typography>
                      <Copy>{renderAst(answer)}</Copy>
                    </div>
                  );
                })}
              </Container>
            </Paper>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(HelpTpl, config.sections.help.color);

export const pageQuery = graphql`
  query HelpTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        head {
          title
          text
        }
        slack {
          title
          text
          cta
        }
        github {
          title
          text
          cta
        }
        docs {
          title
          text
          cta
        }
        faq {
          title
        }
      }
    }
    faq: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/help/faq/.*.md/" } }
      sort: { fields: [frontmatter___score, wordCount___words], order: [DESC, DESC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            question
          }
          answer: htmlAst
        }
      }
    }
  }
`;
