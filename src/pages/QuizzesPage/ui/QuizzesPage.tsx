import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { QuizList } from '@/entities/Quiz';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLayout } from '@/widgets/Pagelayout';

import { getQuizzesPageInited, getQuizzesPageIsLoading } from '../model/selectors/quizzesPageSelectors';
import { fetchQuizList } from '../model/services/fetchQuizList';
import { getQuizzes } from '../model/slice/quizzesPageSlice';

const QuizzesPage = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getQuizzesPageIsLoading);
    const isInited = useSelector(getQuizzesPageInited);
    const quizzes = useSelector(getQuizzes.selectAll);

    useEffect(() => {
        if (!isInited) {
            dispatch(fetchQuizList());
        }
    }, [dispatch, isInited]);

    return (
        <PageLayout>
            <QuizList quizzes={quizzes} isLoading={isLoading}/>
        </PageLayout>
    );
};

export default QuizzesPage;