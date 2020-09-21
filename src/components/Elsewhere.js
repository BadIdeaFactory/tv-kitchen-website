import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import MediumIcon from '@src/icons/MediumIcon';
import config from '@src/config';

export default function Elsewhere() {
  return (
    <>
      <Tooltip title={config.elsewhere.medium.tip}>
        <IconButton color="inherit" href={config.elsewhere.medium.url}>
          <MediumIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title={config.elsewhere.twitter.tip}>
        <IconButton color="inherit" href={config.elsewhere.twitter.url}>
          <TwitterIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title={config.elsewhere.github.tip}>
        <IconButton color="inherit" href={config.elsewhere.github.url}>
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </>
  );
}
