import React from 'react';
import { lighten } from 'polished';

import setType from '@src/utils/setType';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *:first-child': { marginTop: 0 },
    '& > h1': theme.typography.h3,
    '& > h2': theme.typography.h4,
    '& > h3': theme.typography.h5,
    '& > h4': theme.typography.h6,
    '& > h5': theme.typography.subtitle1,
    '& p': theme.typography.body1,
    '& a': {
      background: lighten(0.1, theme.palette.primary.light),
      color: 'inherit',
      textDecoration: 'none',
    },
    '& a:hover': {
      background: theme.palette.primary.light,
      textDecoration: 'none',
    },
    '& code': theme.typography.code,
    '& pre': {
      ...setType(200),
      ...theme.typography.code,
      background: theme.palette.divider,
      color: theme.palette.background.default,
      overflow: 'auto',
      padding: theme.spacing(2.5),
    },
    '& ul > li': {
      ...theme.typography.body1,
      listStyleType: 'square',
    },
    '& ol > li': {
      listStyleType: 'decimal',
    },
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    '& > *:not(:first-child)': {
      marginTop: theme.spacing(3),
    },
    '& > *:last-child': {
      marginBottom: 0,
    },
  },
}));

export default function Copy({ ...props }) {
  const classes = useStyles();
  return <div className={classes.root} {...props} />;
}
