import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *:first-child': { marginTop: 0 },
    '& > h1': theme.typography.h3,
    '& > h2': theme.typography.h4,
    '& > h2': theme.typography.h5,
    '& > h3': theme.typography.h6,
    '& > h4': theme.typography.subtitle1,
    '& > h5': theme.typography.subtitle2,
    '& > p': theme.typography.body1,
    '& a': {
      color: theme.palette.primary.main,
    },
    '& code': theme.typography.code,
    '& pre': {
      ...theme.typography.code,
      background: theme.palette.background.default,
      border: `2px solid ${theme.palette.divider}`,
      overflow: 'auto',
      padding: theme.spacing(3),
      color: theme.palette.primary.dark,
    },
    '& ul > li': {
      ...theme.typography.body1,
      listStyleType: 'square',
    },
    '& ol > li': {},
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
    '& > *:not(:first-child)': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Copy({ children, ...props }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
