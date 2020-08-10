import React from 'react';
import { darken, lighten } from 'polished';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import defaultTheme from '@ui/themes/defaultTheme';
import { ThemeProvider } from '@material-ui/core/styles';

export default function withTheme(Component, color) {
  class HOC extends React.Component {
    render() {
      const theme = {
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          primary: {
            contrastText: createMuiTheme().palette.getContrastText(color),
            dark: darken(0.2, color),
            light: lighten(0.2, color),
            main: color,
          },
        },
      };

      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  }
  return HOC;
}
