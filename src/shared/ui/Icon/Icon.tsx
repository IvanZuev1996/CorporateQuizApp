import { memo } from 'react';

import { classNames, Mods } from '@/shared/lib/helpers/classNames';
import { AntdIconType } from '@/shared/types/icon';

import cls from './Icon.module.scss';

interface SidebarProps {
    Icon: AntdIconType;
    size?: number;
    onClick?: () => void;
    clicked?: boolean;
    isActive?: boolean;
    background?: boolean;
    hovered?: boolean;
    className?: string;
}

export const Icon = memo((props: SidebarProps) => {
    const { Icon, className, onClick, clicked, size = 20, isActive = false, background = false, hovered = false } = props;

    const mods: Mods = {
        [cls.cliked]: clicked,
        [cls.active]: isActive,
        [cls.background]: background,
        [cls.hovered]: hovered
    };

    return (
        <Icon
            onClick={onClick || undefined}
            className={classNames(cls.Icon, mods, [className])}
            style={{ fontSize: `${size}px` }}
        />
    );
});
