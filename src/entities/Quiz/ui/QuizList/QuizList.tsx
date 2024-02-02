import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';

import { Quiz } from '../../model/types/quiz';
import { QuizListItem } from '../QuizListItem/QuizListItem';
import { QuizListItemSkeleton } from '../QuizListItem/QuizListItemSkeleton';

import cls from './QuizList.module.scss';

interface QuizListProps {
    quizzes?: Quiz[];
    isLoading?: boolean;
    className?: string;
}

export const QuizList = (props: QuizListProps) => {
    const { className, quizzes, isLoading } = props;

    if (!quizzes) {
        return <div>No data</div>;
    }

    if (isLoading) {
        return (
            <HStack 
                className={classNames(cls.List, {}, [className])} 
                gap='32'
            >
                {Array(4).fill(0).map((_, index) => (
                    <QuizListItemSkeleton key={index}/>
                ))}
            </HStack>
        );
    }

    return (
        <HStack 
            className={classNames(cls.List, {}, [className])} 
            gap='32'
        >
            {quizzes.map(quiz => (
                <QuizListItem 
                    quizId={quiz.id}
                    title={quiz.title} 
                    description={quiz.description} 
                    img={quiz.img}
                    key={quiz.id}
                />
            ))}
        </HStack>
    );
};
