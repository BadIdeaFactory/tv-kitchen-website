import { darken, lighten } from 'polished';

import { createMuiTheme } from '@material-ui/core/styles';

import colors from '@ui/themes/colors';
import setType from '@ui/mixins/setType';

export const fonts = {
  body: 'Roboto, Helvetica, Arial, sans-serif',
  head: 'Work Sans, Helvetica, Arial, sans-serif',
  foot: 'Roboto Mono, Helvetica, Arial, sans-serif',
};

export const mui = createMuiTheme({});

export default createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: mui.spacing(12),
      '@media (min-width: 0px) and (orientation: landscape)': {
        minHeight: mui.spacing(14),
      },
      [mui.breakpoints.up('md')]: {
        minHeight: mui.spacing(16),
      },
    },
  },
  overrides: {
    MuiButton: {
      outlined: {
        padding: `${mui.spacing(1)}px ${mui.spacing(2)}px`,
        border: `2px solid ${mui.palette.type === 'light' ? colors.mono[900] : colors.mono[100]}`,
        '&$disabled': {
          border: `2px solid ${mui.palette.action.disabledBackground}`,
        },
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: `4px solid ${mui.palette.divider}`,
      },
      paperAnchorDockedTop: {
        borderBottom: `4px solid ${mui.palette.divider}`,
      },
      paperAnchorDockedRight: {
        borderLeft: `4px solid ${mui.palette.divider}`,
      },
      paperAnchorDockedBottom: {
        borderTop: `4px solid ${mui.palette.divider}`,
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 'none',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: mui.palette.background.paper,
        color: mui.palette.text.primary,
        transition: mui.transitions.create('box-shadow'),
      },
      outlined: {
        border: `4px solid ${mui.palette.divider}`,
      },
    },
    MuiTooltip: {
      tooltip: {
        ...setType(100),
        backgroundColor: colors.mono[900],
        color: colors.mono[100],
        fontFamily: fonts.foot,
      },
    },
  },
  palette: {
    background: {
      default: colors.mono[100],
      paper: colors.white,
    },
    divider: '#000',
    shape: {
      borderRadius: 'none',
    },
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
  props: {
    MuiAppBar: {
      elevation: 0,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiPaper: {
      square: true,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: fonts.body,
    fontWeight: '500',
    body1: { ...setType(400) },
    body2: { ...setType(300) },
    button: { ...setType(200), fontFamily: fonts.foot, fontWeight: '600', letterSpacing: '0.15em' },
    h1: { ...setType(900), fontFamily: fonts.head, fontWeight: '600' },
    h2: { ...setType(800), fontFamily: fonts.head, fontWeight: '600' },
    h3: { ...setType(700), fontFamily: fonts.head, fontWeight: '600' },
    h4: { ...setType(600), fontFamily: fonts.head, fontWeight: '600' },
    h5: { ...setType(500), fontFamily: fonts.head, fontWeight: '600' },
    h6: { ...setType(400), fontFamily: fonts.head, fontWeight: '600' },
    overline: { ...setType(100), fontFamily: fonts.foot, fontWeight: '500', letterSpacing: '0.4em' },
    caption: { ...setType(200), fontFamily: fonts.foot, fontWeight: '500' },
    subtitle1: { ...setType(400), fontFamily: fonts.head, fontWeight: '600' },
    subtitle2: { ...setType(400), fontFamily: fonts.head, fontWeight: '600' },
    code: { fontSize: 'inherit', fontFamily: fonts.foot, fontWeight: 400 },
  },
});
