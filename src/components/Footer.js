import React from 'react';

import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import BIFLogo from '@src/assets/bif-logo.svg';
import Elsewhere from '@src/components/Elsewhere';

const useStyles = makeStyles(theme => ({
  root: {},
  elsewhere: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  license: {},
  motherhood: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    height: theme.spacing(7),
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(6),
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <Grid
      alignContent="stretch"
      alignItems="center"
      className={classes.root}
      component="footer"
      container
      direction="row"
      justify="space-between"
      spacing={4}>
      <Grid className={classes.motherhood} container item md={4} xs={12}>
        <Tooltip title="Visit Bad Idea Factory">
          <Button href="https://biffud.com" title="Visit Bad Idea Factory">
            <BIFLogo className={classes.logo} alt="Bad Idea Factory Logo" />
          </Button>
        </Tooltip>
      </Grid>
      <Grid className={classes.license} item md={4} xs={12}>
        <Typography align="center" component="p" variant="caption" color="textSecondary">
          TV Kitchen is a project by <Link href="https://biffud.com">Bad Idea Factory</Link>.
        </Typography>
        <Typography align="center" component="p" variant="caption" color="textSecondary">
          This project is licensed under XYZ, meaning you can do this this and that. Feel free to{' '}
          <Link href="mailto:tvkitchen@biffud.com">reach to us</Link> for more details.
        </Typography>
      </Grid>
      <Grid className={classes.elsewhere} container item md={4} xs={12}>
        <Elsewhere />
      </Grid>
    </Grid>
  );
}
