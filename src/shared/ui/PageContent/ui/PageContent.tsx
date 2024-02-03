import { HTMLAttributes, ReactNode } from 'react';

import { Mods, classNames } from '@/shared/lib/helpers/classNames';

import { VStack } from '../../Stack';

import cls from './PageContent.module.scss';

interface PageContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

export const PageContent = (props: PageContentProps) => {
    const { children, className, fullWidth, ...otherProps } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth
    };
    
    return (
        <VStack 
            className={classNames(cls.content, mods, [className])} 
            {...otherProps}
        >
            {children}
        </VStack>
    );
};
