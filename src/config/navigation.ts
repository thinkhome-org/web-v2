import { IconHome2, IconInfoCircle, IconUsersGroup, IconTools, IconStar, IconMail } from '@tabler/icons-react';

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: IconHome2 },
  { href: '/o-nas', label: 'O nás', icon: IconInfoCircle },
  { href: '/nas-tym', label: 'Náš tým', icon: IconUsersGroup },
  { href: '/sluzby', label: 'Služby', icon: IconTools },
  { href: '/reference', label: 'Reference', icon: IconStar },
  { href: '/kontakt', label: 'Kontakt', icon: IconMail },
];


