import { Mods, classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';

import cls from './QuizMavigationBarItem.module.scss';

interface QuizMavigationBarItemProps {
    id: string;
    title: string;
    isCompleted?: boolean;
    isActive?: boolean;
    className?: string;
}

export const QuizMavigationBarItem = (props: QuizMavigationBarItemProps) => {
    const { className, id, title, isCompleted, isActive }  = props;

    const mods: Mods = {
        [cls.completed]: isCompleted,
        [cls.active]: isActive
    };

    return (
        <HStack className={classNames(cls.Item, mods, [className])} max>
            {id}. 
            {title}
        </HStack>
    );
};
