import React from 'react';
import _ from 'lodash';
import { Link as GatsbyLink } from 'gatsby';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Slide from '@material-ui/core/Slide';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import defaultTheme from '@ui/themes/defaultTheme';
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

export default function Navbar({ uri, ...props }) {
  const classes = useStyles();
  const mui = createMuiTheme();
  const trigger = useScrollTrigger();

  // console.group('Navbar.js');
  // console.log(props);
  // console.groupEnd();

  const { color } = _.find(sections, o => uri.startsWith(o.slug)) || defaultTheme.palette.primary.main;

  return (
    <>
      <div className={classes.toolbar} />
      <Slide appear={false} direction="up" in={!trigger}>
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
                  uri.startsWith(slug)
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
      </Slide>
    </>
  );
}
