import { DashboardOutlined, HomeOutlined } from '@ant-design/icons';

import { getRouteMain, getRouteQuizzes } from '@/shared/const/router';

import { SidebarLinkType } from '../types/sidebar';

export const sidebarLinks: SidebarLinkType[] = [
    {
        icon: HomeOutlined,
        path: getRouteMain(),
        title: 'Главная'
    },
    {
        icon: DashboardOutlined,
        path: getRouteQuizzes(),
        title: 'Опросы'
    }
];