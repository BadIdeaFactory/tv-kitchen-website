import Img from 'gatsby-image';
import React from 'react';
import rehypeReact from 'rehype-react';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@src/components/Copy';
import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import antenna from '@src/ornaments/antenna.svg';
import config from '@src/config';
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
  masterTitle: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
  intro: {
    backgroundImage: `url(${antenna})`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75% auto',
    padding: theme.spacing(0, 0, 15, 0),
    [theme.breakpoints.up('md')]: {
      backgroundSize: '45% auto',
      padding: theme.spacing(0, 0, 25, 0),
    },
  },
  team: {
    backgroundImage: `url(${grill})`,
    backgroundPosition: '-1% -1%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25% auto',
    border: `5px solid ${theme.palette.divider}`,
    padding: theme.spacing(5, 2.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10, 5),
      backgroundSize: '12% auto',
    },
  },
  funders: {
    backgroundImage: `url(${signalBarVertical})`,
    backgroundPosition: 'right top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '10px auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '15px auto',
    },
  },
  fundersOrnamentRef: {
    backgroundImage: `url(${grid})`,
    backgroundPosition: '-10px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '66% auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '33% auto',
    },
  },
  title: {
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
    },
  },
  image: {
    lineHeight: 0,
    margin: theme.spacing(0, 0, 2),
  },
  name: {
    marginBottom: theme.spacing(1),
  },
}));

const AboutTpl = ({
  data: {
    mdx: { frontmatter, body },
    members,
    funders,
  },
  ...props
}) => {
  const classes = useStyles();

  // console.group('AboutTpl.js');
  // console.log({ members });
  // console.log({ funders });
  // console.log({ frontmatter });
  // console.log({ body });
  // console.log({ props });
  // console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <main>
        <Container disableGutters>
          <Container className={classes.head} maxWidth="md">
            <Typography align="center" className={classes.masterTitle} variant="h1">
              {frontmatter.head.title}
            </Typography>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: frontmatter.head.text }}
              variant="subtitle1"
            />
          </Container>

          <div className={classes.intro}>
            <Container maxWidth="sm">
              <Copy>
                <MDXRenderer>{body}</MDXRenderer>
              </Copy>
            </Container>
          </div>

          <div className={classes.team}>
            <Container className={classes.head} maxWidth="md">
              <Typography align="center" className={classes.title} component="h2" variant="h1">
                {frontmatter.team.title}
              </Typography>
              <Typography
                align="center"
                dangerouslySetInnerHTML={{ __html: frontmatter.team.text }}
                variant="subtitle1"
              />
            </Container>

            <Container>
              <Grid alignContent="stretch" container spacing={5}>
                {members.edges.map(({ node }) => {
                  const { frontmatter, id, text } = node;
                  const { fname, lname, photo, title } = frontmatter;
                  return (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                      <Img
                        alt={`Photo of ${fname} ${lname}`}
                        className={classes.image}
                        fixed={photo.childImageSharp.fixed}
                      />
                      <Typography className={classes.name} variant="h5" component="h3">
                        {fname} {lname}
                      </Typography>
                      <Typography component="p" variant="overline">
                        {title}
                      </Typography>
                      <Copy>{renderAst(text)}</Copy>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </div>

          <Separator silent />

          <div className={classes.funders}>
            <Container className={classes.head}>
              <Typography align="center" className={classes.title} component="h2" variant="h1">
                {frontmatter.funding.title}
              </Typography>
              <Typography align="center" variant="subtitle1">
                {frontmatter.funding.text}
              </Typography>
            </Container>
            <Container className={classes.fundersOrnamentRef}>
              <Grid alignContent="stretch" container spacing={5}>
                {funders.edges.map(({ node }) => {
                  const { frontmatter, id, text } = node;
                  const { name, logo } = frontmatter;
                  return (
                    <Grid item xs={12} md={4} key={id}>
                      <Img alt={`Photo of ${name}`} className={classes.image} fixed={logo.childImageSharp.fixed} />
                      <Typography className={classes.name} variant="h5" component="h3">
                        {name}
                      </Typography>
                      <Copy>{renderAst(text)}</Copy>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(AboutTpl, config.sections.about.color);

export const pageQuery = graphql`
  query AboutTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        head {
          title
          text
        }
        team {
          title
          text
        }
        funding {
          title
          text
        }
      }
      body
    }
    members: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/about/members/.*.md/" } }
      sort: { fields: [frontmatter___score, frontmatter___fname], order: [DESC, ASC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            fname
            lname
            photo {
              childImageSharp {
                fixed(
                  width: 120
                  height: 120
                  cropFocus: CENTER
                  traceSVG: { color: "#ffffff", optTolerance: 0.1, turdSize: 10, turnPolicy: TURNPOLICY_MINORITY }
                  grayscale: true
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
            title
          }
          text: htmlAst
        }
      }
    }
    funders: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/about/funders/.*.md/" } }
      sort: { fields: [frontmatter___score, frontmatter___fname], order: [DESC, ASC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            logo {
              childImageSharp {
                fixed(
                  height: 60
                  traceSVG: { color: "#ffffff", optTolerance: 0.1, turdSize: 10, turnPolicy: TURNPOLICY_MINORITY }
                  grayscale: true
                ) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          text: htmlAst
        }
      }
    }
  }
`;
