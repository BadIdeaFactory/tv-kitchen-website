import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `10px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(12),
    paddingTop: theme.spacing(12),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Foobar(props) {
  const classes = useStyles();
  return (
    <Container component="footer" className={classes.root}>
      <Grid
        alignContent="stretch"
        alignItems="flex-start"
        container
        direction="row"
        justify="space-between"
        spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Get our newsletter
          </Typography>
          <Typography variant="body1" gutterBottom>
            Every now and then wesend out emails to our faithful followers. If you wish to get our news, sign up to our
            newsletter bla.
          </Typography>
          <Button href="https://tinyletter.com/tvkitchen" variant="outlined" className={classes.button}>
            Sign up
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Join us on Slack
          </Typography>
          <Typography variant="body1" gutterBottom>
            Join us chatting about this, this and that across a variety of entertaining and useful channels.
          </Typography>
          <Button variant="outlined" className={classes.button}>
            Join Slack
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Email us
          </Typography>
          <Typography variant="body1" gutterBottom>
            For business enquiries or casual chatter—do drop us a line at. We ♥︎ emails.
          </Typography>
          <Button variant="outlined" className={classes.button}>
            Email us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
