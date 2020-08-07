import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import Layout from '@ui/components/Layout';

const useStyles = makeStyles(theme => ({
  root: {},
  article: { '&:not(:last-child)': { marginBottom: theme.spacing(16) } },
  title: { marginBottom: theme.spacing(2) },
  text: { marginBottom: theme.spacing(2) },
}));

export default function PressTpl({ children, pageContext, data: { allMediumPost }, ...props }) {
  const classes = useStyles();

  console.group('PressTpl');
  console.log({ allMediumPost });
  console.log({ props });
  console.groupEnd();

  return (
    <Layout {...props} className={classes.root}>
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
                <Tooltip title="Read on Medium.com">
                  <Link className={classes.title} display="block" href={url}>
                    <Typography component="span" variant="h2">
                      {title}
                    </Typography>
                  </Link>
                </Tooltip>
                <Typography display="block" gutterBottom variant="overline" aria-label="Published on">
                  {date}
                </Typography>
                <Typography className={classes.text} display="block" variant="body1">
                  {paragraphs.map((paragraph, i) => (i > 0 ? `${paragraph.text} ` : null))}
                </Typography>
                <Button href={url} variant="outlined" target="_blank" endIcon={<OpenInNewIcon fontSize="inherit" />}>
                  Read on Medium
                </Button>
              </article>
            );
          }
        )}
      </Container>
    </Layout>
  );
}
