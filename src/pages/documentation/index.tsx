import React from 'react';
import { PageProps } from 'gatsby';

export default function DocumentationRoute(props: PageProps) {
  console.log({ props });
  return <h1>Documentation</h1>;
}
