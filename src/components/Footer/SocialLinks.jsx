import React from 'react';
import strings from 'lang';
import { IconGithub, IconDiscord } from '../Icons';

const links = [{
  tooltip: strings.app_github,
  path: '//github.com/odota',
  icon: <IconGithub />,
}, {
  tooltip: strings.app_discord,
  path: '//discord.gg/0o5SQGbXuWCNDcaF',
  icon: <IconDiscord />,
}];

export default () => links.map(link => (
  <a
    key={link.path}
    target="_blank"
    rel="noopener noreferrer"
    data-hint-position="top"
    data-hint={link.tooltip}
    href={link.path}
  >
    {link.icon}
  </a>
));
