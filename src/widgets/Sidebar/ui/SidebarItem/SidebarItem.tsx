import { PieChartOutlined } from '@ant-design/icons';

import { getRouteQuiz } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';
import { HStack } from '@/shared/ui/Stack';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    isActive?: boolean;
}

export const SidebarItem = ({isActive}: SidebarItemProps) => {
    const p = 1;
    
    return (
        <AppLink to={getRouteQuiz('1')}>
            <HStack className={classNames(cls.Wrap, {[cls.active]: isActive})} align='center' gap='4'>
                <Icon Icon={PieChartOutlined} isActive={isActive}/>
                <p>Ссылка</p>
            </HStack>
        </AppLink>
    );
};