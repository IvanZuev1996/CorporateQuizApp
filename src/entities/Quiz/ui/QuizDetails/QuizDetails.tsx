import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';
import { PageContent } from '@/shared/ui/PageContent';
import { HStack } from '@/shared/ui/Stack';

import { Answer } from '../../../Question/model/types/question';
import { QuestionCard } from '../../../Question/ui/QuestionCard/QuestionCard';
import { getQuizDetailsData, getQuizDetailsisLoading } from '../../model/selectors/quizDetails';
import { fetchQuizeById } from '../../model/services/fetchQuizById';
import { QuizNavigationBar } from '../QuizNavigationBar/QuizNavigationBar';

import cls from './QuizDetails.module.scss';


interface QuizDetailsProps {
    id?: string;
}

export const QuizDetails = (props: QuizDetailsProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getQuizDetailsData);
    const isLoading = useSelector(getQuizDetailsisLoading);
    const questions = useMemo(() => data?.questions || [], [data?.questions]);

    const [currentQuestionId, setCurrentQuestionId] = useState<string>('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [isQuizSubmit, setIsQuizSubmit] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchQuizeById(id));
    }, [dispatch, id]);
    
    const onQuizSubmit = useCallback(() => {
        // Здесь должна быть логина по отправлению выполненного квиза на сервер
        setIsQuizSubmit(true);
    }, []);
    
    const onMoveToNextAnswer = useCallback((selectedAnswer: Answer) => {
        if (selectedAnswer.isCorrect) {
            setCorrectAnswersCount(current => current + 1);
        }

        if (currentQuestionIndex === questions.length - 1) {
            return onQuizSubmit();
        }

        setCurrentQuestionIndex((current) => current + 1);
        setCurrentQuestionId(questions[currentQuestionIndex + 1].id);
    }, [currentQuestionIndex, onQuizSubmit, questions]);

    if (!data && !isLoading) {
        return <div>No Data!</div>;
    }

    if (isLoading) {
        return <Loader/>;
    }

    if (isQuizSubmit) {
        return (
            <div>Поздравляем! У вас {correctAnswersCount} правильных ответа!</div>
        );
    }

    return (
        <HStack align='start' className={cls.wrapper} gap='32' max>
            <PageContent fullWidth className={cls.content}>
                <QuestionCard 
                    question={questions[currentQuestionIndex]}
                    isLastQuestion={currentQuestionIndex === questions.length - 1}
                    onSendAnswer={onMoveToNextAnswer}
                />
            </PageContent>
            <QuizNavigationBar
                questions={questions} 
                currentQuestionIndex={currentQuestionIndex}
                className={cls.navigationBar}
            />
        </HStack>
    );
};
