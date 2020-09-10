import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ThemeProvider } from '@material-ui/core/styles';

import darkTheme from '@src/themes/darkTheme';
import grid from '@src/ornaments/grid-dark.svg';
import config from '@src/config';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundImage: `url(${grid})`,
    backgroundPosition: '101% -10px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 90%',
    height: '100%',
    padding: theme.spacing(10),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'auto 50%',
      padding: theme.spacing(10, 5),
      textAlign: 'center',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px !important`,
    },
    position: 'relative',
  },
  button: {
    marginTop: theme.spacing(3),
  },
  gridItem: {
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className={`${classes.paper} dark-theme`}>
        <Grid container alignContent="stretch" spacing={8}>
          <Grid className={classes.gridItem} item xs={12} md={4}>
            <div>
              <Typography variant="h4" component="h2" gutterBottom>
                Join newsletter
              </Typography>
              <Typography variant="body1" gutterBottom>
                Occasionally we send out emails to our faithful followers. Sign up to our newsletter bla bla.
              </Typography>
            </div>
            <Button className={classes.button} href={config.elsewhere.tinyletter.url} variant="outlined">
              Tune in
            </Button>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={4}>
            <div>
              <Typography variant="h4" component="h2" gutterBottom>
                Catch on Slack
              </Typography>
              <Typography variant="body1" gutterBottom>
                Join us chatting about this, this and that across a variety of entertaining and useful channels.
              </Typography>
            </div>
            <Button className={classes.button} href={config.elsewhere.slack.url} variant="outlined">
              Join Slack
            </Button>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={4}>
            <div>
              <Typography component="h2" gutterBottom variant="h4">
                Email us
              </Typography>
              <Typography variant="body1" gutterBottom>
                For business enquiries or casual chatter—do drop us a line at tvkitchen@biffud.com. We ♥︎ emails.
              </Typography>
            </div>
            <Button className={classes.button} href="mailto:tvkitchen@biffud.com" variant="outlined">
              Email us
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
