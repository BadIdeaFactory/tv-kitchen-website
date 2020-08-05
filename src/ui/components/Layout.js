import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

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
  return (
    <ThemeProvider theme={DefaultThm}>
      <CssBaseline />
      <Topbar />
      <div className={classes.toolbar} />
      {children}
      <div className={classes.toolbar} />
      <Foobar />
      <Navbar />
    </ThemeProvider>
  );
}
