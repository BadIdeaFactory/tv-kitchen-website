import React from 'react';
import { PageProps } from 'gatsby';

export default function AboutRoute(props: PageProps) {
  console.log({ props });
  return <h1>About</h1>;
}
