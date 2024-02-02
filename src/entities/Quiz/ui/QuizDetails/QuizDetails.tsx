import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';
import { PageContent } from '@/shared/ui/PageContent';
import { HStack } from '@/shared/ui/Stack';

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
    const questions = data?.questions || [];

    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchQuizeById(id));
    }, [dispatch, id]);

    const onMoveToNextAnswer = useCallback(() => {
        if (currentQuestionId !== questions.length) {
            setCurrentQuestionId((current) => current + 1);
        }
    }, [currentQuestionId, questions.length]);

    if (!data) {
        return <div>No Data!</div>;
    }

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <HStack align='start' className={cls.wrapper} gap='32' max>
            <PageContent fullWidth className={cls.content}>
                <QuestionCard 
                    question={questions[currentQuestionId]}
                    onSendAnswer={onMoveToNextAnswer}
                />
            </PageContent>
            <QuizNavigationBar className={cls.navigationBar}/>
        </HStack>
    );
};
