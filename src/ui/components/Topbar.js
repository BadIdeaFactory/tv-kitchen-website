import React from 'react';
import _ from 'lodash';
import { Link as GatsbyLink } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import TwitterIcon from '@material-ui/icons/Twitter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import TVKitchenLogo from '@ui/assets/tv-kitchen-logo.svg';
import sections from '@ui/config/sections';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `3px solid ${theme.palette.divider}`,
  },
  toolbar: theme.mixins.toolbar,
  inner: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    minHeight: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      minHeight: theme.spacing(10),
    },
  },
  brandlink: {
    lineHeight: '0',
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
  menuItem: {
    borderColor: 'transparent',
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

  // console.group('Topbar.js');
  // console.log({ props });
  // console.log({ trigger });
  // console.groupEnd();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={classes.root} color="inherit">
          <Toolbar>
            <Grid
              alignContent="stretch"
              alignItems="center"
              container
              direction="row"
              justify="space-between"
              spacing={4}>
              <Grid item className={`${classes.logo} ${classes.inner}`} xs={6} md={2}>
                <Link component={GatsbyLink} variant="h6" to="/" className={classes.brandlink}>
                  <TVKitchenLogo className={classes.brandmark} />
                </Link>
              </Grid>
              <Grid
                alignItems="center"
                className={`${classes.menu} ${classes.inner}`}
                container
                item
                justify="center"
                md={8}>
                {_.orderBy(sections, o => o.order).map(section => {
                  const { id, slug, title } = section;
                  return (
                    <Button
                      className={!pathname.startsWith(slug) ? classes.menuItem : ''}
                      component={GatsbyLink}
                      key={id}
                      to={slug}
                      variant="outlined">
                      {title}
                    </Button>
                  );
                })}
              </Grid>
              <Grid item container className={`${classes.social} ${classes.inner}`} xs={6} md={2} justify="flex-end">
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
                {/* <Tooltip title="Join our Tiny Newsletter">
                  <IconButton color="inherit" href="https://tinyletter.com/tvkitchen" className={classes.socialButton}>
                    <EmailIcon fontSize="small" />
                  </IconButton>
                </Tooltip> */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
      <div className={classes.toolbar} />
    </>
  );
}
