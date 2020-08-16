import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  return (
    <Container component="aside" className={classes.root} disableGutters>
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
            Occasionally we send out emails to our faithful followers. Sign up to our newsletter bla bla.
          </Typography>
          <Button className={classes.button} href="https://tinyletter.com/tvkitchen" variant="outlined">
            Tune in
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Join us on Slack
          </Typography>
          <Typography variant="body1" gutterBottom>
            Join us chatting about this, this and that across a variety of entertaining and useful channels.
          </Typography>
          <Button className={classes.button} variant="outlined">
            Join Slack
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography component="h2" gutterBottom variant="h4">
            Email us
          </Typography>
          <Typography variant="body1" gutterBottom>
            For business enquiries or casual chatter—do drop us a line at{' '}
            <Link href="mailto:tvkitchen@biffud.com">tvkitchen@biffud.com</Link>. We ♥︎ emails.
          </Typography>
          <Button className={classes.button} href="mailto:tvkitchen@biffud.com" variant="outlined">
            Email us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
