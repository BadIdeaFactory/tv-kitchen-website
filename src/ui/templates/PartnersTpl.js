import React from 'react';

import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@ui/components/Layout';

const useStyles = makeStyles(theme => ({
  PartnersTpl: {},
}));

export default function PartnersTpl({ props }) {
  const classes = useStyles();

  return (
    <Layout className={classes.PartnersTpl}>
      <Container component="main" maxWidth="md">
        Hello world
      </Container>
    </Layout>
  );
}
