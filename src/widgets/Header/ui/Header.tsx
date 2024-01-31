import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './Header.module.scss';

const { Header: AntdHeader} = Layout;

export const Header = () => (
    <AntdHeader className={cls.Header} >
        <img alt='logo' src='http://company.alizandy.ir/images/logo.png' className={cls.logo} />
        <Icon Icon={UserOutlined} clicked background hovered />
    </AntdHeader>
);