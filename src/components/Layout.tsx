import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

const theme = {};

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
