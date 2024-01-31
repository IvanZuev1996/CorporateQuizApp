import { DashboardOutlined, HomeOutlined } from '@ant-design/icons';

import { getRouteMain, getRouteQuiz } from '@/shared/const/router';

import { SidebarLinkType } from '../types/sidebar';

export const sidebarLinks: SidebarLinkType[] = [
    {
        icon: HomeOutlined,
        path: getRouteMain(),
        title: 'Главная'
    },
    {
        icon: DashboardOutlined,
        path: getRouteQuiz('1'),
        title: 'Опросы'
    }
];