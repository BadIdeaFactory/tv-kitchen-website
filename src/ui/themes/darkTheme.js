import { darken, lighten } from 'polished';

import { createMuiTheme } from '@material-ui/core/styles';

import colors from '@ui/themes/colors';
import lightTheme from '@ui/themes/lightTheme';

export const fonts = {
  body: 'Roboto, Helvetica, Arial, sans-serif',
  head: 'Work Sans, Helvetica, Arial, sans-serif',
  foot: 'Roboto Mono, Helvetica, Arial, sans-serif',
};

export const mui = createMuiTheme({});

export default createMuiTheme({
  ...lightTheme,
  palette: {
    ...lightTheme.palette,
    background: {
      default: colors.mono[800],
      paper: colors.mono[900],
    },
    divider: colors.mono[700],
    text: {
      primary: colors.black,
    },
    primary: {
      contrastText: mui.palette.getContrastText(colors.blue),
      dark: darken(0.2, colors.blue),
      light: lighten(0.2, colors.blue),
      main: colors.blue,
    },
  },
});
