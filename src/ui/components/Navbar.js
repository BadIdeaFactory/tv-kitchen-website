import React from 'react';
import _ from 'lodash';
import { Link as GatsbyLink } from 'gatsby';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import sections from '@ui/config/sections';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `3px solid ${theme.palette.divider}`,
    bottom: 0,
    left: 0,
    margin: 0,
    height: 'auto',
    position: 'fixed',
    right: 0,
    top: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  action: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  actionIcon: {
    marginBottom: theme.spacing(0.5),
  },
  actionLabel: {
    ...theme.typography.caption,
  },
}));

export default function Navbar({ location: { pathname }, ...props }) {
  const classes = useStyles();
  const mui = createMuiTheme();

  // console.group('Navbar.js');
  // console.log(props);
  // console.groupEnd();

  const { color } = _.find(sections, o => o.slug.startsWith(props.uri));

  return (
    <>
      <div className={classes.toolbar} />
      <BottomNavigation className={classes.root} component="nav" showLabels>
        {Object.keys(sections).map(key => {
          const { title, slug, Icon } = sections[key];
          return (
            <BottomNavigationAction
              classes={{
                label: classes.actionLabel,
              }}
              className={classes.action}
              style={
                pathname.startsWith(slug)
                  ? {
                      background: color,
                      color: mui.palette.getContrastText(color),
                    }
                  : null
              }
              component={GatsbyLink}
              icon={<Icon fontSize="small" className={classes.actionIcon} />}
              key={key}
              label={title}
              to={slug}
            />
          );
        })}
      </BottomNavigation>
    </>
  );
}
