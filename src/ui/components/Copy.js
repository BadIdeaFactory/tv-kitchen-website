import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function Copy({ children, ...props }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}
