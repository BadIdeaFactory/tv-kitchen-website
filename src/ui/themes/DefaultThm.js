import { darken, lighten } from 'polished';

import { createMuiTheme } from '@material-ui/core/styles';

import setType from '@ui/mixins/setType';

export const colors = {
  black: darken(0.48, '#7e7e7e'),
  blue: '#193EB7',
  cyan: '#6CD5D5',
  green: '#6AC32D',
  purple: '#D672AF',
  red: '#E51515',
  white: '#fff',
  yellow: '#FFBE07',

  mono: {
    100: lighten(0.48, '#7e7e7e'),
    200: lighten(0.36, '#7e7e7e'),
    300: lighten(0.24, '#7e7e7e'),
    400: lighten(0.12, '#7e7e7e'),
    500: '#7e7e7e',
    600: darken(0.12, '#7e7e7e'),
    700: darken(0.24, '#7e7e7e'),
    800: darken(0.36, '#7e7e7e'),
    900: darken(0.48, '#7e7e7e'),
  },
  shadow: {
    50: 'rgba(0,0,0,.035)',
    100: 'rgba(0,0,0,.07)',
    200: 'rgba(0,0,0,.17375)', // 0,07+((0,83/8)*1)
    300: 'rgba(0,0,0,.2775)',
    400: 'rgba(0,0,0,.38125)',
    500: 'rgba(0,0,0,.485)',
    600: 'rgba(0,0,0,.58875)',
    700: 'rgba(0,0,0,.6925)',
    800: 'rgba(0,0,0,.79625)',
    900: 'rgba(0,0,0,.9)',
  },
  flare: {
    50: 'rgba(255,255,255,.035)',
    100: 'rgba(255,255,255,.07)',
    200: 'rgba(255,255,255,.17375)', // 0,07+((0,83/8)*1)
    300: 'rgba(255,255,255,.2775)',
    400: 'rgba(255,255,255,.38125)',
    500: 'rgba(255,255,255,.485)',
    600: 'rgba(255,255,255,.58875)',
    700: 'rgba(255,255,255,.6925)',
    800: 'rgba(255,255,255,.79625)',
    900: 'rgba(255,255,255,.9)',
  },
};

export const mui = createMuiTheme({});

export default createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: mui.spacing(10),
      '@media (min-width: 0px) and (orientation: landscape)': {
        minHeight: mui.spacing(12),
      },
      [mui.breakpoints.up('md')]: {
        minHeight: mui.spacing(14),
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
  },
  palette: {
    background: {
      default: colors.white,
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
      contrastText: mui.palette.getContrastText(colors.purple),
      dark: darken(0.2, colors.purple),
      light: lighten(0.2, colors.purple),
      main: colors.purple,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiPaper: {
      outlined: true,
      square: true,
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    ...setType(400),
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '500',
    body1: {},
    body2: {},
    button: {
      ...setType(200),
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: '700',
      letterSpacing: '0.2em',
      // textTransform: 'none',
    },
    h1: { ...setType(900), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    h2: { ...setType(800), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    h3: { ...setType(700), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    h4: { ...setType(600), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    h5: { ...setType(500), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    h6: { ...setType(400), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    overline: {
      ...setType(100),
      fontFamily: 'Roboto Mono, Helvetica, Arial, sans-serif',
      fontWeight: 'normal',
      letterSpacing: '0.4em',
    },
    subtitle1: { ...setType(400), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
    subtitle2: { ...setType(400), fontFamily: 'Work Sans, Helvetica, Arial, sans-serif', fontWeight: '600' },
  },
});
