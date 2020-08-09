import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Foobar from '@ui/components/Foobar';
import Head from '@ui/components/Head';
import Navbar from '@ui/components/Navbar';
import Topbar from '@ui/components/Topbar';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

export default function Layout(props) {
  const classes = useStyles();
  const { children } = props;

  // console.group('Layout.js');
  // console.log({ props });
  // console.groupEnd();

  return (
    <>
      <Head {...props} />
      <CssBaseline />
      <Container maxWidth="lg">
        <Topbar {...props} />
        <div className={classes.toolbar} />
        {children}
        <Foobar {...props} />
        <div className={classes.toolbar} />
      </Container>
      <Navbar {...props} />
    </>
  );
}
