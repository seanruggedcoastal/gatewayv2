import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Dashboard',
    link: { to: '/dashboard' },
  },
  {
    title: 'Insights',
    link: { to: '/extra-components/accordion' },
  },
  {
    title: 'Salesforce Integration',
    link: { to: '/extra-components/accordion' },
  },
  {
    title: 'Team Directory',
    link: { to: '/extra-components/actions' },
  },
  {
    title: 'Document Library',
    link: { to: '/extra-components/alert' },
  },
  {
    title: 'Calendar',
    link: { to: '/extra-components/list' },
  },
  {
    title: 'Tools',
    link: { to: '/extra-components/spinner' },
  },
  {
    title: 'Make a Request',
    link: { to: '/extra-components/progress' },
  },
  {
    title: 'Settings',
    link: { to: '/extra-components/tabs' },
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { to: '/auth/login' },
      },
      {
        title: 'Register',
        link: { to: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { to: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { to: '/auth/reset-password' },
      },
    ],
  },
];

export default items;
