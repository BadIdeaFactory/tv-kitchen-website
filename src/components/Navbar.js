import React from 'react';
import _ from 'lodash';
import { Link as GatsbyLink } from 'gatsby';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import lightTheme from '@src/themes/lightTheme';
import config from '@src/config';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `5px solid ${theme.palette.divider}`,
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
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
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

export default function Navbar({ uri, ...props }) {
  const classes = useStyles();
  const mui = createMuiTheme();
  const trigger = useScrollTrigger();

  // console.group('Navbar.js');
  // console.log(props);
  // console.groupEnd();

  const color = _.find(config.sections, o => uri.startsWith(o.slug))?.color || lightTheme.palette.primary.main;

  return (
    <>
      <div className={classes.toolbar} />
      <BottomNavigation className={classes.root} component="nav" showLabels>
        {_.orderBy(config.sections, o => o.order).map(section => {
          const { id, title, slug, Icon } = section;
          return (
            <BottomNavigationAction
              classes={{
                label: classes.actionLabel,
              }}
              className={classes.action}
              style={
                uri.startsWith(slug)
                  ? {
                      background: color,
                      color: mui.palette.getContrastText(color),
                    }
                  : null
              }
              component={GatsbyLink}
              icon={<Icon className={classes.actionIcon} />}
              key={id}
              label={!trigger ? title : null}
              to={slug}
            />
          );
        })}
      </BottomNavigation>
    </>
  );
}
