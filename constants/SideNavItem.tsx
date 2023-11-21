
import { Folder, HelpCircle, Home, Mail, Settings } from 'lucide-react';
import { SideNavItem } from './SideNavItemType';


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Home width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Folder width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Web Design', path: '/projects/web-design' },
      { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Mail width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Settings width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <HelpCircle width="24" height="24" />,
  },
];