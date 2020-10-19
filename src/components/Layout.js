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
import glitchA from '@src/ornaments/glitch-horizontal.svg';
import glitchB from '@src/ornaments/glitch-horizontal-b.svg';
import glitchC from '@src/ornaments/glitch-horizontal-c.svg';
import glitchD from '@src/ornaments/glitch-horizontal-d.svg';
import glitchE from '@src/ornaments/glitch-horizontal-e.svg';
import glitchF from '@src/ornaments/glitch-horizontal-f.svg';

const glitches = [glitchA, glitchB, glitchC, glitchD, glitchE, glitchF];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${glitches[Math.floor(Math.random() * glitches.length)]})`,
    backgroundPosition: 'center 100px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'center 75px',
      backgroundSize: '90% auto',
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
