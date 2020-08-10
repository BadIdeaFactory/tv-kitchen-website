import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({}));

export default function Funding(props) {
  // const classes = useStyles();
  // const { children } = props;

  // console.group('Funding.js');
  // console.log({ props });
  // console.groupEnd();

  return (
    <Container maxWidth="lg">
      <Typography align="center" component="h2" variant="h1">
        Funding
      </Typography>
    </Container>
  );
}
