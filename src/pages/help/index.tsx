import React from 'react';
import { PageProps } from 'gatsby';

export default function HelpRoute(props: PageProps) {
  console.log({ props });
  return <h1>Help</h1>;
}
