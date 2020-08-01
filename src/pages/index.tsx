import React from 'react';
import { PageProps } from 'gatsby';

export default function IndexRoute(props: PageProps) {
  console.log({ props });
  return <h1>Hello world</h1>;
}
