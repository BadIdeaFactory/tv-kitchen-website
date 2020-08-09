import React from 'react';
import { darken, lighten } from 'polished';

import defaultTheme from '@ui/themes/defaultTheme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const withTheme = (Component, color) => {
  const mui = createMuiTheme();

  const theme = color
    ? {
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          primary: {
            contrastText: mui.palette.getContrastText(color),
            dark: darken(0.2, color),
            light: lighten(0.2, color),
            main: color,
          },
        },
      }
    : defaultTheme;

  class HOC extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  }
  return HOC;
};

export default withTheme;
