import React from 'react';

import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@ui/components/Layout';

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function AboutTpl(props) {
  const classes = useStyles();

  return (
    <Layout {...props} className={classes.root}>
      <Container component="main" maxWidth="md">
        {props.children}
      </Container>
    </Layout>
  );
}
