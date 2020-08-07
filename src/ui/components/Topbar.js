import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import TwitterIcon from '@material-ui/icons/Twitter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import TVKitchenLogo from '@ui/assets/tv-kitchen-logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `3px solid transparent`,
  },
  toolbar: theme.mixins.toolbar,
  inner: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      minHeight: theme.spacing(10),
    },
  },
  brandmark: {
    height: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      height: theme.spacing(6),
    },
  },
  menu: {
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& > *': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  social: {},
  socialButton: {
    '&:first-child': {
      marginLeft: theme.spacing(1),
    },
    '&:last-child': {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      '&:first-child': {
        marginLeft: theme.spacing(2),
      },
      '&:last-child': {
        marginRight: theme.spacing(2),
      },
    },
  },
}));

export default function Topbar({ location: { pathname }, ...props }) {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  console.group('Topbar.js');
  console.log({ props });
  console.groupEnd();

  return (
    <>
      <AppBar className={classes.root} color="inherit" style={trigger ? { borderBottom: `3px solid black` } : null}>
        <Toolbar>
          <Grid
            alignContent="stretch"
            alignItems="center"
            container
            direction="row"
            justify="space-between"
            spacing={4}>
            <Grid item className={`${classes.logo} ${classes.inner}`}>
              <Link component={GatsbyLink} variant="h6" to="/">
                <TVKitchenLogo className={classes.brandmark} />
              </Link>
            </Grid>
            <Grid item xs className={`${classes.menu} ${classes.inner}`}>
              <Button color={pathname.startsWith('/about') ? 'primary' : 'inherit'} component={GatsbyLink} to="/about/">
                About
              </Button>
              <Button
                color={pathname.startsWith('/partners') ? 'primary' : 'inherit'}
                component={GatsbyLink}
                to="/partners/">
                Partners
              </Button>
              <Button color={pathname.startsWith('/press') ? 'primary' : 'inherit'} component={GatsbyLink} to="/press/">
                Press
              </Button>
              <Button color={pathname.startsWith('/docs') ? 'primary' : 'inherit'} component={GatsbyLink} to="/docs/">
                Docs
              </Button>
              <Button color={pathname.startsWith('/help') ? 'primary' : 'inherit'} component={GatsbyLink} to="/help/">
                Help
              </Button>
            </Grid>
            <Grid item className={`${classes.social} ${classes.inner}`}>
              <Tooltip title="Follow us on Twitter">
                <IconButton color="inherit" href="https://twitter.com/biffud" className={classes.socialButton}>
                  <TwitterIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Visit TV Kitchen Github">
                <IconButton color="inherit" href="https://github.com/tvkitchen" className={classes.socialButton}>
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email us">
                <IconButton color="inherit" href="mailto:tvkitchen@biffud.com" className={classes.socialButton}>
                  <EmailIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
}
