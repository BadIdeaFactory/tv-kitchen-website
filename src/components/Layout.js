import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Footer from '@src/components/Footer';
import Head from '@src/components/Head';
import Navbar from '@src/components/Navbar';
import Topbar from '@src/components/Topbar';

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
      <Container maxWidth={false}>
        <Topbar {...props} />
        <div className={classes.toolbar} />
        {children}
        <div className={classes.toolbar} />
        <Footer {...props} />
        <div className={classes.toolbar} />
      </Container>
      <Navbar {...props} />
    </>
  );
}
