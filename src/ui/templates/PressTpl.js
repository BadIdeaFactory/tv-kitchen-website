import React from 'react';
import { Helmet } from 'react-helmet';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@ui/components/Layout';
import sections from '@ui/config/sections';
import withTheme from '@ui/themes/withTheme';

const useStyles = makeStyles(theme => ({
  article: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(16),
    },
    '&:not(:first-child)': {
      marginTop: theme.spacing(16),
    },
  },
  title: {},
  date: { marginTop: theme.spacing(1.5) },
  text: { marginTop: theme.spacing(3) },
  action: { marginTop: theme.spacing(3) },
}));

const PressTpl = ({ _frontmatter, children, data: { allMediumPost }, ...props }) => {
  const classes = useStyles();

  console.group('PressTpl');
  console.log({ _frontmatter });
  console.log({ allMediumPost });
  console.log({ children });
  console.log({ props });
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{_frontmatter.title}</title>
      </Helmet>
      <Container component="main" maxWidth="sm">
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
              <article className={classes.article} key={id}>
                <Tooltip title="Continue on Medium…">
                  <Link className={classes.title} display="block" href={url}>
                    <Typography className={classes.title} component="span" variant="h2">
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
                  variant="contained"
                  color="primary"
                  target="_blank"
                  endIcon={<OpenInNewIcon fontSize="small" />}>
                  Continue on Medium
                </Button>
              </article>
            );
          }
        )}
      </Container>
    </Layout>
  );
};

export default withTheme(PressTpl, sections.press.color);
