
export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Overview',
    path: '/pages/dashboard/',
    icon: 'hugeicons:grid-view',
    active: true,
  },
  {
    id: 'team',
    subheader: 'Team',
    path: '/pages/team/',
    icon: 'hugeicons:book-open-01',
  },
  {
    id: 'permision',
    subheader: 'Permision',
    path: '/pages/permision/',
    icon: 'mynaui:user-hexagon',
  },
  {
    id: 'auditlog',
    subheader: 'Audit Log',
    path: '/pages/auditlog',
    icon: 'hugeicons:settings-01',
  },
  
];

export default sitemap;
