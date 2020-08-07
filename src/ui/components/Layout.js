import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ThemeProvider } from '@material-ui/core/styles';

import DefaultThm from '@ui/themes/DefaultThm';
import Foobar from '@ui/components/Foobar';
import Navbar from '@ui/components/Navbar';
import Topbar from '@ui/components/Topbar';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

export default function Layout(props) {
  const classes = useStyles();
  const { children } = props;

  console.group('Layout.js');
  console.log({ props });
  console.groupEnd();

  return (
    <ThemeProvider theme={DefaultThm}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Topbar {...props} />
        <div className={classes.toolbar} />
        {children}
        <Foobar {...props} />
        <div className={classes.toolbar} />
      </Container>
      <Navbar />
    </ThemeProvider>
  );
}
