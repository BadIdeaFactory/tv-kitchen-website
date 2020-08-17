import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Headline from '@src/components/Headline';
import Layout from '@src/components/Layout';
import Separator from '@src/components/Separator';
import grill from '@src/ornaments/grill-horizontal-light.svg';
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
  title: {},
  article: {
    backgroundImage: `url(${grill})`,
    backgroundPosition: '-5% top',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '50px auto',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '-2% top',
    },
    '&:not(:last-child)': {
      marginBottom: theme.spacing(16),
    },
  },
  date: { marginTop: theme.spacing(1.5) },
  text: { marginTop: theme.spacing(3) },
  action: { marginTop: theme.spacing(3) },
}));

const PressTpl = ({
  data: {
    allMediumPost,
    mdx: { frontmatter },
  },
  ...props
}) => {
  const classes = useStyles();

  console.group('PressTpl');
  console.log({ allMediumPost });
  console.log({ props });
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

          {allMediumPost.edges.map(
            ({
              node: {
                id,
                title,
                previewContent2: {
                  bodyModel: { paragraphs },
                },
                firstPublishedAt,
                uniqueSlug,
              },
            }) => {
              const date = Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(Date.parse(firstPublishedAt));
              const url = `https://medium.com/storycopter-news/${uniqueSlug}`;
              return (
                <Container className={classes.article} key={id} maxWidth="sm">
                  <article>
                    <Tooltip title="Continue on Medium…">
                      <Link className={classes.articleTitle} display="block" href={url}>
                        <Typography component="span" variant="h2">
                          {title}
                        </Typography>
                      </Link>
                    </Tooltip>
                    <Typography
                      aria-label="Published on"
                      className={classes.date}
                      display="block"
                      gutterBottom
                      variant="overline">
                      {date}
                    </Typography>
                    <Typography className={classes.text} display="block" gutterBottom variant="body1">
                      {paragraphs.map((paragraph, i) => (i > 0 ? `${paragraph.text} ` : null))}
                    </Typography>
                    <Button
                      className={classes.action}
                      href={url}
                      variant="outlined"
                      color="inherit"
                      target="_blank"
                      endIcon={<OpenInNewIcon fontSize="small" />}>
                      Continue on Medium
                    </Button>
                  </article>
                </Container>
              );
            }
          )}
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(PressTpl, config.sections.press.color);

export const pageQuery = graphql`
  query PressTplQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        head {
          title
          text
        }
      }
    }
    allMediumPost {
      edges {
        node {
          id
          title
          previewContent2 {
            bodyModel {
              paragraphs {
                text
              }
            }
          }
          firstPublishedAt
          uniqueSlug
        }
      }
    }
  }
`;
