import * as Icons from '@tabler/icons-react';

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/o-nas', label: 'O nás', icon: Icons.IconInfoCircle },
  { href: '/nas-tym', label: 'Náš tým', icon: Icons.IconUsersGroup },
  { href: '/sluzby', label: 'Služby', icon: Icons.IconTools },
  { href: '/reference', label: 'Reference', icon: Icons.IconStar },
  { href: '/kontakt', label: 'Kontakt', icon: Icons.IconMail },
];


