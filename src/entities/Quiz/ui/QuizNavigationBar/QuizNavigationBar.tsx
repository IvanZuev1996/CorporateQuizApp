import { UpOutlined } from '@ant-design/icons';

import { Question } from '@/entities/Question';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { PageContent } from '@/shared/ui/PageContent';
import { HStack, VStack } from '@/shared/ui/Stack';

import { QuizMavigationBarItem } from '../QuizMavigationBarItem/QuizMavigationBarItem';

import cls from './QuizNavigationBar.module.scss';

interface QuizNavigationBarProps {
    questions?: Question[];
    currentQuestionIndex?: number;
    className?: string;
}

export const QuizNavigationBar = (props: QuizNavigationBarProps) => {
    const { className, questions, currentQuestionIndex = 0 }= props;

    return (
        <PageContent className={classNames(cls.Navigation, {}, [className])}>
            <HStack justify='between' align='center' max>
                <h3>Вопросы</h3>
                <Icon Icon={UpOutlined} clicked hovered />
            </HStack>
            <VStack className={cls.questions} gap='8' max>
                {questions?.map((question, index) => (
                    <QuizMavigationBarItem 
                        id={question.id} 
                        title={question.title}
                        key={question.id}
                        isActive={index === currentQuestionIndex}
                        isCompleted={index < currentQuestionIndex}
                    />
                ))}
            </VStack>
        </PageContent>
    );
};
