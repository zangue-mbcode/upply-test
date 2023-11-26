
import { Folder, HelpCircle, Home, Mail, Settings, User, User2 } from 'lucide-react';
import { SideNavItem } from './SideNavItemType';


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Post',
    path: '/dashboard',
    icon: <Home width="24" height="24" />,
  },
  {
    title: 'Write Post',
    path: '/dashboard/write',
    icon: <Folder width="24" height="24" />
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <User width="24" height="24" />
  },
];