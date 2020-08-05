import PropTypes from 'prop-types';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import Slide from '@material-ui/core/Slide';
import SubjectIcon from '@material-ui/icons/Subject';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  root: {
    left: 0,
    position: 'fixed',
    right: 0,
    top: 'auto',
    bottom: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <BottomNavigation className={classes.root} showLabels>
        <BottomNavigationAction component={GatsbyLink} to="/" label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction component={GatsbyLink} to="/about" label="About" icon={<InfoOutlinedIcon />} />
        <BottomNavigationAction component={GatsbyLink} to="/partners" label="Partners" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction component={GatsbyLink} to="/docs" label="Docs" icon={<MenuBookOutlinedIcon />} />
        <BottomNavigationAction component={GatsbyLink} to="/help" label="Help" icon={<HelpOutlineIcon />} />
        <BottomNavigationAction component={GatsbyLink} to="/press" label="Press" icon={<SubjectIcon />} />
      </BottomNavigation>
    </>
  );
}
