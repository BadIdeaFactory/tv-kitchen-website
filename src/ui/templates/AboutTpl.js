import Img from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ThemeProvider } from '@material-ui/core/styles';

import Copy from '@ui/components/Copy';
import Layout from '@ui/components/Layout';
import darkTheme from '@ui/themes/darkTheme';
import sections from '@ui/config/sections';
import withTheme from '@ui/themes/withTheme';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: { marginBottom: theme.spacing(3) },
  team: {
    padding: theme.spacing(8),
  },
  memberName: {
    marginBottom: theme.spacing(1),
  },
  memberTitle: {
    marginBottom: theme.spacing(2),
  },
  memberBio: {},
  card: {
    height: '100%',
    display: 'flex',
    position: 'relative',
  },
  about: {},
  head: {
    marginBottom: theme.spacing(6),
  },
  funding: {},
}));

const AboutTpl = ({ _frontmatter, pageContext, ...props }) => {
  const classes = useStyles();

  const { team, about, funding } = _frontmatter;

  console.group('AboutTpl.js');
  console.log({ _frontmatter });
  console.log({ pageContext });
  console.log({ props });
  console.groupEnd();

  return (
    <Layout {...props}>
      <Helmet>
        <title>{_frontmatter.title}</title>
      </Helmet>
      <main>
        <Container maxWidth="lg" className={classes.about}>
          <Container disableGutters className={classes.head}>
            <Typography align="center" className={classes.title} variant="h1">
              {_frontmatter.about.title}
            </Typography>
            <Typography align="center" className={classes.intro} variant="subtitle1">
              {about.intro}
            </Typography>
          </Container>
          <Container disableGutters maxWidth="sm">
            <Copy>
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
        </Container>
        <div className={classes.toolbar} />
        <ThemeProvider theme={darkTheme}>
          <Paper>
            <Container maxWidth={false} disableGutters className={classes.team}>
              <Container className={classes.head} maxWidth="lg">
                <Typography align="center" className={classes.title} component="h2" variant="h1">
                  {team.title}
                </Typography>
                <Typography align="center" className={classes.intro} variant="subtitle1">
                  TV Kitchen is a project of the <a href="https://biffud.com/">Bad Idea Factory</a>, a collective of
                  chaotic creatives using technology to make people thinking face emoji. BIF has only existed for a few
                  years, but our members have been developing software for journalists for the better part of a
                  collective century.
                </Typography>
              </Container>
              <Container className={classes.body} maxWidth="md">
                <Grid container spacing={8} alignContent="stretch">
                  {Object.keys(team.members).map(key => {
                    const member = team.members[key];
                    return (
                      <Grid item xs={12} md={6} key={key}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Typography className={classes.memberName} variant="h5" component="h3">
                              {member.fname} {member.lname}
                            </Typography>
                            <Typography className={classes.memberTitle} variant="overline" component="p">
                              {member.title}
                            </Typography>
                            <Typography className={classes.memberBio} variant="body2" component="p">
                              {member.bio}
                            </Typography>
                          </CardContent>
                          <CardMedia
                            // className={classes.cover}
                            // image="/static/images/cards/live-from-space.jpg"
                            title="Live from space album cover">
                            WIP
                          </CardMedia>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Container>
            </Container>
          </Paper>
        </ThemeProvider>
        <div className={classes.toolbar} />
        <Container maxWidth="lg" className={classes.funding}>
          <Container className={classes.head} disableGutters maxWidth={false}>
            <Typography align="center" className={classes.title} component="h2" variant="h1">
              {funding.title}
            </Typography>
            <Typography align="center" className={classes.intro} variant="subtitle1">
              {funding.intro}
            </Typography>
          </Container>
          <Container className={classes.body} maxWidth="md">
            <Grid container spacing={8} alignContent="stretch">
              {Object.keys(funding.funders).map(key => {
                const funder = funding.funders[key];
                return (
                  <Grid item xs={12} md={6} key={key}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography className={classes.memberName} variant="h5" component="h3">
                          {funder.name}
                        </Typography>
                        <Typography className={classes.memberBio} variant="body2" component="p">
                          {funder.text}
                        </Typography>
                      </CardContent>
                      <CardMedia
                        // className={classes.cover}
                        // image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover">
                        WIP
                      </CardMedia>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Container>
      </main>
    </Layout>
  );
};

export default withTheme(AboutTpl, sections.about.color);
