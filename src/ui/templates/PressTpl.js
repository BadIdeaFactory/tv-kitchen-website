import React from 'react';
import _ from 'lodash';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@ui/components/Layout';

const useStyles = makeStyles(theme => ({
  PressTpl: {},
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
    <Layout className={classes.PressTpl}>
      <Container component="main" maxWidth="sm">
        {allMediumPost.edges.map(
          ({
            node: {
              id,
              title,
              previewContent2: {
                bodyModel: { paragraphs },
              },
              uniqueSlug,
            },
          }) => {
            return (
              <article className={classes.article} key={id}>
                <Tooltip title="Read on Medium.com">
                  <Link
                    className={classes.title}
                    display="block"
                    href={`https://medium.com/storycopter-news/${uniqueSlug}`}>
                    <Typography component="span" variant="h2">
                      {title}
                    </Typography>
                  </Link>
                </Tooltip>
                <Typography className={classes.text} display="block" variant="body1">
                  {paragraphs.map((paragraph, i) => (i > 0 ? `${paragraph.text} ` : null))}
                </Typography>
                <Button href="https://medium.com" variant="contained">
                  Continue on Medium.com
                </Button>
              </article>
            );
          }
        )}
      </Container>
    </Layout>
  );
}
