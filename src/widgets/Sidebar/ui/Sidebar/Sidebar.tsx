import Sider from 'antd/es/layout/Sider';
import { useLocation } from 'react-router-dom';

import { sidebarLinks } from '../../model/consts/sidebarLinks';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

export const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <Sider theme='light' className={cls.Sidebar} width={200}>
            {
                sidebarLinks.map(({icon, path, title}) => 
                    <SidebarItem 
                        icon={icon} 
                        path={path} 
                        title={title}
                        isActive={pathname === path}
                        key={path}
                    />
                )
            }
        </Sider>
    );};