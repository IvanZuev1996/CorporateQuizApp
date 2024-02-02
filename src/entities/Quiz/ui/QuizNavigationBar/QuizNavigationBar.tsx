import { classNames } from '@/shared/lib/helpers/classNames';
import { PageContent } from '@/shared/ui/PageContent';

import cls from './QuizNavigationBar.module.scss';

interface QuizNavigationBarProps {
    className?: string;
}

export const QuizNavigationBar = ({ className }: QuizNavigationBarProps) => {
    const a = 0;

    return (
        <PageContent className={classNames(cls.Navigation, {}, [className])}>
            Content
        </PageContent>
    );
};
