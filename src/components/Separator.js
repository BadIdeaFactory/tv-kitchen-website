import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    borderColor: theme.palette.text.primary,
    borderStyle: 'solid',
    borderWidth: '5px 0 0',
    marginBottom: theme.spacing(12),
    marginTop: theme.spacing(12),
    padding: 0,
  },
}));

export default function Separator(props) {
  const classes = useStyles();
  return <hr className={classes.root} />;
}
