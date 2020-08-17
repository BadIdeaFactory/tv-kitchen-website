import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Contact from '@src/components/Contact';
import Footer from '@src/components/Footer';
import Head from '@src/components/Head';
import Navbar from '@src/components/Navbar';
import Separator from '@src/components/Separator';
import Topbar from '@src/components/Topbar';
import config from '@src/config';
import glitch from '@src/ornaments/glitch-horizontal.svg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${glitch})`,
    backgroundPosition: 'center 100px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80% auto',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'center 75px',
      backgroundSize: '100% auto',
    },
  },
  toolbar: theme.mixins.toolbar,
}));

export default function Layout({ children, ...props }) {
  const classes = useStyles();

  // console.group('Layout.js');
  // console.log({ props });
  // console.groupEnd();

  return (
    <>
      <Head {...props} />
      <CssBaseline />
      <Container className={classes.root}>
        <MDXProvider components={config.mdComponents}>
          <div className={classes.toolbar} />
          <Topbar {...props} />
          {children}
          <Separator silent />
          <Contact {...props} />
          <Separator silent />
          <Footer {...props} />
          <Separator silent />
        </MDXProvider>
      </Container>
      <Navbar {...props} />
    </>
  );
}
