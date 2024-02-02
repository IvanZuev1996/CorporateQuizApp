import { classNames } from '@/shared/lib/helpers/classNames';
import { PageContent } from '@/shared/ui/PageContent';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './QuizListItem.module.scss';


interface QuizListItemSkeletonProps {
    className?: string;
}

export const QuizListItemSkeleton = ({ className }: QuizListItemSkeletonProps) => (
    <PageContent className={classNames(cls.Item, {}, [className])}>
        <VStack gap='8' max className={cls.itemContent}>
            <HStack className={cls.imageWrap} max>
                <Skeleton height="100%" width="100%" border='8px'/>
            </HStack> 
            <VStack className={cls.info} gap='8'>
                <Skeleton height={18} width={200} border='8px'/>
                <Skeleton height={18} width={150} border='8px'/>
                <Skeleton height={18} width={100} border='8px'/>
            </VStack>
            <Skeleton height={40} width='100%' border='8px'/>
        </VStack>
    </PageContent>
);