

import { classNames } from '@/shared/lib/helpers/classNames';
import { AntdIconType } from '@/shared/types/icon';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    icon: AntdIconType;
    title: string;
    path: string;
    isActive?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { icon, path, title, isActive } = props;
    
    return (
        <AppLink to={path}>
            <HStack className={classNames(cls.Wrap, {[cls.active]: isActive})} align='center' gap='4'>
                <Icon Icon={icon} isActive={isActive}/>
                <p>{title}</p>
            </HStack>
        </AppLink>
    );
};