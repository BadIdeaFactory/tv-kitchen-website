import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SubjectIcon from '@material-ui/icons/Subject';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import colors from '@src/themes/colors';

export default {
  description: 'TV Kitchen is THIS THIS AND THAT',
  keywords: 'kitchen, tv, media, api',
  title: 'TV Kitchen',
  url: 'https://tv.kitchen/',
  elsewhere: {
    medium: {
      url: 'https://medium.com/todays-menu/',
      tip: 'Read our latest on Medium',
    },
    slack: {
      url: 'https://slack.com/something',
      tip: 'Join our Slack channel',
    },
    twitter: {
      url: 'https://twitter.com/biffud',
      tip: 'Follow us on Twitter',
    },
    github: {
      url: 'https://github.com/tvkitchen',
      tip: 'Visit TV Kitchen Github',
    },
    tinyletter: {
      url: 'https://tinyletter.com/tvkitchen',
      tip: 'Sign up to our tiny letter',
    },
  },
  sections: {
    about: { id: 'about', order: 0, title: 'About', slug: '/about', Icon: InfoIcon, color: colors.yellow },
    partners: {
      id: 'partners',
      order: 1,
      title: 'Partners',
      slug: '/partners',
      Icon: SupervisedUserCircleIcon,
      color: colors.cyan,
    },
    press: { id: 'press', order: 2, title: 'Press', slug: '/press', Icon: SubjectIcon, color: colors.green },
    docs: { id: 'docs', order: 3, title: 'Docs', slug: '/docs', Icon: LocalLibraryIcon, color: colors.purple },
    help: { id: 'help', order: 4, title: 'Help', slug: '/help', Icon: HelpIcon, color: colors.red },
  },
  mdComponents: {
    a: props => <Link component={GatsbyLink} {...props} />,
    table: props => <Table {...props} />,
    tbody: props => <TableBody {...props} />,
    td: props => <TableCell {...props} />,
    tfoot: props => <TableFooter {...props} />,
    th: props => <TableCell {...props} />,
    thead: props => <TableHead {...props} />,
    tr: props => <TableRow {...props} />,
  },
};
