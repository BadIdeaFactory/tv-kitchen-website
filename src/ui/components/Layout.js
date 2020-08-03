import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import DefaultThm from '@ui/themes/DefaultThm';
import Foobar from '@ui/components/Foobar';
import Topbar from '@ui/components/Topbar';

export default function Layout(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={DefaultThm}>
      <CssBaseline />
      <Topbar />
      {children}
      <Foobar />
    </ThemeProvider>
  );
}
