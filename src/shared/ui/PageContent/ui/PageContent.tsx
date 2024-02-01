import { ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/helpers/classNames';

import { VStack } from '../../Stack';

import cls from './PageContent.module.scss';

interface PageContentProps {
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

export const PageContent = (props: PageContentProps) => {
    const { children, className, fullWidth } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth
    };
    
    return (
        <VStack className={classNames(cls.content, mods, [className])}>
            {children}
        </VStack>
    );
};
