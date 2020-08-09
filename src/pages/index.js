import React from 'react';

import Layout from '@ui/components/Layout';
import withTheme from '@ui/themes/withTheme';

const HomeTpl = props => {
  console.log({ props });
  return (
    <Layout {...props}>
      <h1>Home</h1>
    </Layout>
  );
};

export default withTheme(HomeTpl);
