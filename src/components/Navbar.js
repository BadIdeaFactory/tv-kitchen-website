import React from 'react';
import _ from 'lodash';
import { Link as GatsbyLink } from 'gatsby';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import makeStyles from '@material-ui/core/styles/makeStyles';

import config from '@src/config';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `5px solid ${theme.palette.divider}`,
    bottom: 0,
    height: 'auto',
    left: 0,
    margin: 0,
    position: 'fixed',
    right: 0,
    top: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  action: {
    color: theme.palette.text.primary,
  },
  selectedAction: {
    background: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    '& *': {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  },
}));

export default function Navbar({ uri, ...props }) {
  const classes = useStyles();

  // console.group('Navbar.js');
  // console.log(uri, props);
  // console.groupEnd();

  return (
    <BottomNavigation
      className={classes.root}
      component="nav"
      showLabels
      value={_.find(config.sections, o => uri.startsWith(o.slug))?.slug || uri}>
      {_.orderBy(config.sections, o => o.order).map(section => {
        const { id, title, slug, Icon } = section;
        return (
          <BottomNavigationAction
            classes={{
              root: classes.action,
              selected: classes.selectedAction,
            }}
            component={GatsbyLink}
            icon={<Icon fontSize="small" />}
            key={id}
            label={title}
            to={slug}
            value={slug}
          />
        );
      })}
    </BottomNavigation>
  );
}
