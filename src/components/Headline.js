import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
}));

export default function Headline({ text, title, ...props }) {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      {title ? (
        <Typography align="center" className={classes.title} variant="h1">
          {title}
        </Typography>
      ) : null}
      {text ? <Typography align="center" dangerouslySetInnerHTML={{ __html: text }} variant="subtitle1" /> : null}
    </Container>
  );
}
