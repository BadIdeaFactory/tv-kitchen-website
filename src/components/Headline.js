import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = longText =>
  makeStyles(theme => ({
    title: {
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(longText ? 8 : 4),
      },
    },
  }));

export default function Headline({ text, title, ...props }) {
  const classes = useStyles(text.length > 100)();
  return (
    <Container maxWidth="md">
      {title ? (
        <Typography align="center" className={classes.title} variant="h1">
          {title}
        </Typography>
      ) : null}
      {props.children}
      {text ? <Typography align="center" dangerouslySetInnerHTML={{ __html: text }} variant="subtitle1" /> : null}
    </Container>
  );
}
