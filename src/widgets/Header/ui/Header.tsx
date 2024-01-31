import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import { getRouteMain } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './Header.module.scss';

const { Header: AntdHeader} = Layout;

export const Header = () => (
    <AntdHeader className={cls.Header} >
        <AppLink to={getRouteMain()} className={cls.logoLink}>
            <img alt='logo' src='http://company.alizandy.ir/images/logo.png' className={cls.logo} />
        </AppLink>
        <Icon Icon={UserOutlined} clicked background hovered />
    </AntdHeader>
);