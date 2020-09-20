import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import rehypeReact from 'rehype-react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@src/components/Copy';
import Headline from '@src/components/Headline';
import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import config from '@src/config';
import glitch from '@src/ornaments/glitch-horizontal-flip.svg';
import withTheme from '@src/themes/withTheme';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: config.mdComponents,
}).Compiler;

const useStyles = makeStyles(theme => ({
  partners: {},
  join: {
    backgroundColor: '#EAE9E8',
    borderWidth: '5px 0',
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(5, 0),
    backgroundImage: `url(${glitch})`,
    backgroundPosition: 'center 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90% auto',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'center 101%',
      padding: theme.spacing(10, 0),
    },
  },
  placeholder: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 0, 2),
      height: '60px',
      display: 'block',
    },
  },
  ethical: {},
  title: {
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(5),
    },
  },
  logoLink: {
    display: 'inline-block',
    lineHeight: 0,
    margin: theme.spacing(0, 0, 2),
  },
  image: {
    lineHeight: 0,
  },
  name: {
    display: 'inline-block',
    marginBottom: theme.spacing(1),
  },
  ctas: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(2.5, 1),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(5, 1),
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(7.5, 2.5, 2.5),
      },
    },
  },
}));

const PartnersTpl = ({
  data: {
    mdx: { frontmatter, body },
    partners,
  },
  ...props
}) => {
  const classes = useStyles();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <main>
        <Container disableGutters>
          <Headline title={frontmatter.head.title} text={frontmatter.head.text} />

          <Separator silent />

          <Container maxWidth="md" className={classes.partners}>
            <Grid alignContent="stretch" container spacing={5}>
              {partners.edges.map(({ node }) => {
                const { frontmatter, id, text } = node;
                const { name, logo, url } = frontmatter;

                return (
                  <Grid item xs={12} md={6} key={id}>
                    <div>
                      {logo?.childImageSharp?.fixed ? (
                        <Link href={url} className={classes.logoLink}>
                          <Img alt={`Photo of ${name}`} className={classes.image} fixed={logo.childImageSharp.fixed} />
                        </Link>
                      ) : (
                        <div className={classes.placeholder} />
                      )}
                    </div>
                    <Link className={classes.name} href={url} variant="h5">
                      {name}
                    </Link>
                    <Copy>{renderAst(text)}</Copy>
                  </Grid>
                );
              })}
            </Grid>
          </Container>

          <Separator silent />

          <div className={classes.join}>
            <Container maxWidth="md" className={classes.head}>
              <Typography align="center" className={classes.title} component="h2" variant="h2">
                {frontmatter.join.title}
              </Typography>
              <Typography
                align="center"
                className={classes.title}
                dangerouslySetInnerHTML={{ __html: frontmatter.join.text }}
                variant="subtitle1"
              />
            </Container>
            <Container maxWidth="sm">
              <Typography
                align="center"
                className={classes.title}
                dangerouslySetInnerHTML={{ __html: frontmatter.join.ethicalPractice }}
                variant="h5"
              />
              <Copy>
                <MDXRenderer>{body}</MDXRenderer>
              </Copy>
            </Container>
            <Container className={classes.ctas}>
              <Button href="mailto:tvkitchen@biffud.com" variant="contained" color="primary" size="large">
                {frontmatter.join.emailCta}
              </Button>
              <Button
                href="https://docs.google.com/document/d/1t_6FVZ5zQWvlqdG0_4I1Pgk9D_9e66sAlBsNEqV2k5M/edit#"
                variant="contained"
                color="primary"
                size="large">
                {frontmatter.join.mouCta}
              </Button>
            </Container>
          </div>
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
        title
        head {
          title
          text
        }
        join {
          title
          text
          ethicalPractice
          emailCta
          mouCta
        }
      }
      body
    }
    partners: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/partners/partners/.*.md/" } }
      sort: { fields: [frontmatter___score, frontmatter___name], order: [DESC, ASC] }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            url
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
            title
          }
          text: htmlAst
        }
      }
    }
  }
`;
