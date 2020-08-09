import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '@ui/components/Layout';
import withTheme from '@ui/themes/withTheme';

const HomeTpl = props => {
  console.log({ props });
  return (
    <Layout {...props}>
      <Helmet>
        <title>Hello world</title>
      </Helmet>
      <h1>Home</h1>
    </Layout>
  );
};

export default withTheme(HomeTpl);
