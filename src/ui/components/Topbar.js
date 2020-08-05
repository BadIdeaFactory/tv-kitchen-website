import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import TwitterIcon from '@material-ui/icons/Twitter';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  menu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  social: {
    '& > *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Topbar(props) {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="default">
          <Toolbar>
            <Grid container>
              <Grid item>
                <Link component={GatsbyLink} variant="h6" to="/">
                  TV Kitchen
                </Link>
              </Grid>
              <Grid item xs>
                <div className={classes.menu}>
                  <Link component={GatsbyLink} variant="body2" to="/about/">
                    About
                  </Link>
                  <Link component={GatsbyLink} variant="body2" to="/partners/">
                    Partners
                  </Link>
                  <Link component={GatsbyLink} variant="body2" to="/docs/">
                    Docs
                  </Link>
                  <Link component={GatsbyLink} variant="body2" to="/help/">
                    Help
                  </Link>
                  <Link component={GatsbyLink} variant="body2" to="/press/">
                    Press
                  </Link>
                </div>
              </Grid>
              <Grid item className={classes.social}>
                <Tooltip title="Follow us on Twitter">
                  <IconButton size="small" href="https://twitter.com/biffud">
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Visit TV Kitchen Github">
                  <IconButton size="small" href="https://github.com/tvkitchen">
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Email us">
                  <IconButton size="small" href="mailto:tvkitchen@biffud.com">
                    <EmailIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </>
  );
}
