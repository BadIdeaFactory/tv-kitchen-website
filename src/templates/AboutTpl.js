import Img from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@src/components/Copy';
import Layout from '@src/components/Layout';
import config from '@src/config';
import withTheme from '@src/themes/withTheme';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  head: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(12),
    },
  },
  title: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(10),
    },
  },
  team: {
    border: `5px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(12),
      marginTop: theme.spacing(12),
      padding: theme.spacing(12),
    },
  },
  image: {
    lineHeight: 0,
  },
  memberName: {
    marginBottom: theme.spacing(1),
  },
  memberText: {
    marginTop: theme.spacing(1),
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

  console.group('AboutTpl.js');
  console.log({ members });
  console.log({ funders });
  console.log({ frontmatter });
  console.log({ body });
  console.log({ props });
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <main>
        <Container disableGutters>
          <Container className={classes.head} maxWidth="md">
            <Typography align="center" className={classes.title} variant="h1">
              {frontmatter.head.title}
            </Typography>
            <Typography
              align="center"
              dangerouslySetInnerHTML={{ __html: frontmatter.head.text }}
              variant="subtitle1"
            />
          </Container>

          <Container maxWidth="sm">
            <MDXProvider>
              <Copy>
                <MDXRenderer>{body}</MDXRenderer>
              </Copy>
            </MDXProvider>
          </Container>

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
              <Grid container spacing={5} alignContent="stretch">
                {members.edges.map(({ node }) => {
                  const { frontmatter, id, text } = node;
                  const { fname, lname, photo, title } = frontmatter;
                  return (
                    <Grid item xs={12} md={6} key={id}>
                      <Grid container spacing={3} alignContent="stretch" alignItems="center">
                        <Grid item className={classes.image}>
                          <Img fixed={photo.childImageSharp.fixed} alt={`Photo of ${fname} ${lname}`} />
                        </Grid>
                        <Grid item xs>
                          <Typography className={classes.memberName} variant="h5" component="h3">
                            {fname} {lname}
                          </Typography>
                          <Typography variant="overline" component="p">
                            {title}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Copy className={classes.memberText} dangerouslySetInnerHTML={{ __html: text }}></Copy>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </div>

          <Container className={classes.head}>
            <Typography align="center" className={classes.title} component="h2" variant="h1">
              {frontmatter.funding.title}
            </Typography>
            <Typography align="center" variant="subtitle1">
              {frontmatter.funding.text}
            </Typography>
          </Container>

          <Container disableGutters>
            <Grid alignContent="stretch" container spacing={5}>
              {funders.edges.map(({ node }) => {
                const { frontmatter, id, text } = node;
                const { name, logo } = frontmatter;
                return (
                  <Grid item xs={12} md={4} key={id}>
                    <Grid container spacing={3} alignContent="stretch" direction="column">
                      <Grid item className={classes.image}>
                        <Img fixed={logo.childImageSharp.fixed} alt={`Photo of ${name}`} />
                      </Grid>
                      <Grid item>
                        <Typography variant="h5" component="h3">
                          {name}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Copy className={classes.funderText} dangerouslySetInnerHTML={{ __html: text }}></Copy>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
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
          text: html
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
          text: html
        }
      }
    }
  }
`;
