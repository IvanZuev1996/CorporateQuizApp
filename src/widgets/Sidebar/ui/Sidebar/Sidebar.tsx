import Sider from 'antd/es/layout/Sider';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

export const Sidebar = () => (
    <Sider theme='light' className={cls.Sidebar} width={200}>
        <SidebarItem/>
        <SidebarItem isActive/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
    </Sider>
);