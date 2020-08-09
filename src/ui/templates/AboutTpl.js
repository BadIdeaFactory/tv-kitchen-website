import React from 'react';

import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@ui/components/Layout';
import colors from '@ui/themes/colors';
import withTheme from '@ui/themes/withTheme';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const AboutTpl = props => {
  const classes = useStyles();

  return (
    <Layout {...props} className={classes.root}>
      <Container component="main" maxWidth="md">
        {props.children}
      </Container>
    </Layout>
  );
};

export default withTheme(AboutTpl, colors.yellow);
