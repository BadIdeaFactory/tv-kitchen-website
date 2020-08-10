import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Copy from '@ui/components/Copy';

// const useStyles = makeStyles(theme => ({}));

export default function Team(props) {
  // const classes = useStyles();
  // const { children } = props;

  // console.group('Team.js');
  // console.log({ props });
  // console.groupEnd();

  return (
    <Container maxWidth="lg">
      <Typography align="center" component="h2" variant="h1">
        Team
      </Typography>
      <Copy>
        <p>
          TV Kitchen is a project of the <a href="https://biffud.com/">Bad Idea Factory</a>, a collective of chaotic
          creatives using technology to make people thinking face emoji. BIF has only existed for a few years, but our
          members have been developing software for journalists for the better part of a collective century.
        </p>
      </Copy>
    </Container>
  );
}
