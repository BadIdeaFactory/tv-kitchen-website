import React from 'react';
import { Helmet } from 'react-helmet';

// import makeStyles from '@material-ui/core/styles/makeStyles';

import Layout from '@uises/withTheme';

import About from './ofAbout/About';
import Funding from './ofAbout/Team';
import Team from './ofAbout/Funding';

// const useStyles = makeStyles(theme => ({}));

const AboutTpl = ({ children, pageContext, ...props }) => {
  // const classes = useStyles();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{pageContext.frontmatter.title}</title>
      </Helmet>
      <main>
        {children}
        <About />
        <Team />
        <Funding />
      </main>
    </Layout>
  );
};

export default withTheme(AboutTpl, sections.about.color);
