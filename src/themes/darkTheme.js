import { createMuiTheme } from '@material-ui/core/styles';

import lightTheme from '@src/themes/lightTheme';
import colors from '@src/themes/colors';

export default createMuiTheme({
  ...lightTheme,
  overrides: {
    MuiPaper: {
      ...lightTheme.overrides.MuiPaper,
      root: {
        ...lightTheme.overrides.MuiPaper.root,
        backgroundColor: colors.mono[900],
        color: colors.mono[100],
      },
      outlined: {
        ...lightTheme.overrides.MuiPaper.outlined,
      },
    },
    MuiButton: {
      ...lightTheme.overrides.MuiButton,
      root: {
        ...lightTheme.overrides.MuiButton.root,
        '&:focus': {
          backgroundColor: colors.mono[100],
          color: colors.mono[900],
          fill: colors.mono[900],
        },
      },
      outlined: {
        ...lightTheme.overrides.MuiButton.outlined,
        border: `2px solid ${lightTheme.palette.type === 'light' ? colors.mono[100] : colors.mono[200]}`,
        '&$disabled': {
          border: `2px solid ${lightTheme.palette.action.disabledBackground}`,
        },
      },
      outlinedPrimary: {
        border: `2px solid ${colors.black}`,
        '&:hover': {
          border: `2px solid ${colors.black}`,
          backgroundColor: 'transparent',
        },
      },
    },
    MuiIconButton: {
      ...lightTheme.overrides.MuiIconButton,
      root: {
        ...lightTheme.overrides.MuiIconButton.root,
        borderRadius: 'none',
        '&:focus': {
          backgroundColor: colors.mono[100],
          color: colors.mono[900],
          fill: colors.mono[900],
        },
      },
    },
    MuiLink: {
      ...lightTheme.overrides.MuiLink,
      root: {
        ...lightTheme.overrides.MuiLink.root,
        '&:focus': {
          backgroundColor: colors.mono[100],
          boxShadow: `0 0 0 2px ${colors.mono[100]}`,
          color: colors.mono[900],
          fill: colors.mono[900],
        },
      },
    },
  },
  palette: {
    ...lightTheme.palette,
    background: {
      ...lightTheme.palette.background,
      default: colors.mono[800],
      paper: colors.mono[900],
    },
    text: {
      ...lightTheme.palette.text,
      primary: colors.mono[100],
    },
  },
});
