import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles(theme => ({
  root: {
    borderStyle: 'solid',
    borderWidth: '5px 0 0',
    clear: 'both',
    display: 'block',
    padding: 0,
    width: '100%',
  },
}));

export default function Separator({ silent, ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <hr
      className={classes.root}
      style={{
        margin: silent ? theme.spacing(5, 0) : theme.spacing(10, 0),
        borderColor: silent ? 'transparent' : theme.palette.text.primary,
      }}
    />
  );
}
