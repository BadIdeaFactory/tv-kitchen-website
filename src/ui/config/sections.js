import HelpIcon from '@material-ui/icons/Help';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubjectIcon from '@material-ui/icons/Subject';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InfoIcon from '@material-ui/icons/Info';

import colors from '@ui/themes/colors';

export default {
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
};
