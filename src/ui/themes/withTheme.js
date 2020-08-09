import React from 'react';
import { darken, lighten } from 'polished';
import _ from 'lodash';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import defaultTheme from '@ui/themes/defaultTheme';
import { ThemeProvider } from '@material-ui/core/styles';

import sections from '@ui/config/sections';

export default function withTheme(Component) {
  class HOC extends React.Component {
    render() {
      const { color } = _.find(sections, o => o.slug.startsWith(this.props.uri));
      const theme = color
        ? {
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
          }
        : defaultTheme;

      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  }
  return HOC;
}
