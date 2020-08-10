import React from 'react';
import { Helmet } from 'react-helmet';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Copy from '@ui/components/Copy';
import Layout from '@ui/components/Layout';
import sections from '@ui/config/sections';
import withTheme from '@ui/themes/withTheme';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const AboutTpl = ({ children, pageContext, ...props }) => {
  const classes = useStyles();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{pageContext.frontmatter.title}</title>
      </Helmet>
      <main>
        <Container maxWidth="sm">
          <Typography align="center" gutterBottom variant="h1">
            TV What?
          </Typography>
          <Copy>
            <p>
              TV Kitchen is an open source tool to get data out of local TV streams–starting with captions, and in the
              future political ads, chyrons, talking points, and more. Participants will be able to develop, share, and
              use free software tools to extract data from TV and share metadata safely with a wider community. The more
              people who use TV Kitchen, the more plentiful and rich our information and collaborations.
            </p>
            <h2>Why TV Kitchen?</h2>
            <p>
              Local television news still attracts some{' '}
              <a href="https://www.pewresearch.org/wp-content/uploads/sites/8/2018/07/State-of-the-News-Media_2017-Archive.pdf#page=30">
                20 million nightly viewers
              </a>
              , and{' '}
              <a href="https://news.gallup.com/poll/260492/trust-internet-news-accuracy-points.aspx">
                remains the most trusted source
              </a>{' '}
              for news. Major media conglomerates, including Sinclair, Tegna, and Nexstar, have been snapping up these
              local stations, and{' '}
              <a href="https://www.pewresearch.org/fact-tank/2017/05/11/buying-spree-brings-more-local-tv-stations-to-fewer-big-companies/">
                now control
              </a>{' '}
              nearly 40 percent. And despite the rise in social media advertising, six publicly held local TV station
              companies <a href="https://www.journalism.org/fact-sheet/local-tv-news/">collected $1.2 billion</a> for
              political advertising during the 2018 elections.
            </p>
            <p>
              But for researchers and journalists, local TV remains opaque. If you want to analyze local coverage of
              recent protests for racial justice, the pandemic, or the election, you need to pay an expensive private
              firm or ignore this major source of information.
            </p>
            <h2>How we got here</h2>
            <p>
              In 2016, the TV Kitchen team worked with the <a href="http://archive.org/">Internet Archive</a> on the{' '}
              <a href="https://politicaladarchive.org/">Political TV Ad Archive</a>, tracking political ads on TV and
              turning them into data. This fueled all kinds of creative uses, including an online{' '}
              <a href="https://www.theatlantic.com/politics/archive/2016/02/super-campaign-dodger/462531/">
                video game
              </a>
              , a visual on how CNN, Fox, and MSNBC{' '}
              <a href="https://www.nytimes.com/interactive/2016/09/29/us/elections/debate-moments.html">
                covered presidential debates
              </a>
              , and <a href="https://politicaladarchive.org/ad/PolAd_DonaldTrump_5rk9i">fact-checks</a> of political
              ads. TV Kitchen takes this same functionality and invites the public to collaborate.
            </p>
          </Copy>
        </Container>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Typography align="center" component="h2" variant="h1">
            Team
          </Typography>
          <Copy>
            <p>
              TV Kitchen is a project of the <a href="https://biffud.com/">Bad Idea Factory</a>, a collective of chaotic
              creatives using technology to make people thinking face emoji. BIF has only existed for a few years, but
              our members have been developing software for journalists for the better part of a collective century.
            </p>
          </Copy>
        </Container>
        <div className={classes.toolbar} />
        <Container maxWidth="lg">
          <Typography align="center" component="h2" variant="h1">
            Funding
          </Typography>
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(AboutTpl, sections.about.color);
