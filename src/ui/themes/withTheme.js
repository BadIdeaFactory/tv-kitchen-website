import React from 'react';
import _ from 'lodash';
import { darken, lighten } from 'polished';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import defaultTheme from '@ui/themes/defaultTheme';
import { ThemeProvider } from '@material-ui/core/styles';

import sections from '@ui/config/sections';

export default function withTheme(Component) {
  class HOC extends React.Component {
    render() {
      const { color } = _.find(sections, o => this.props.uri.startsWith(o.slug) || defaultTheme.palette.primary.main);

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
