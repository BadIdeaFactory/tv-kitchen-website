import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import SubjectIcon from '@material-ui/icons/Subject';

import colors from '@ui/themes/colors';

export default {
  0: { title: 'About', slug: '/about', Icon: InfoOutlinedIcon, color: colors.yellow },
  1: { title: 'Partners', slug: '/partners', Icon: FavoriteBorderIcon, color: colors.cyan },
  2: { title: 'Press', slug: '/press', Icon: SubjectIcon, color: colors.green },
  3: { title: 'Docs', slug: '/docs', Icon: MenuBookOutlinedIcon, color: colors.purple },
  4: { title: 'Help', slug: '/help', Icon: HelpOutlineIcon, color: colors.red },
};
