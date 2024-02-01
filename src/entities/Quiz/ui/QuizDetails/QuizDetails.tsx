import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
// eslint-disable-next-line babun4ek-fsd-plugin/layer-imports-checker
import { PageLoader } from '@/widgets/PageLoader';

import { getQuizDetailsData, getQuizDetailsisLoading } from '../../model/selectors/quizDetails';
import { fetchQuizeById } from '../../model/services/fetchQuizById';

interface QuizDetailsProps {
    id?: string;
}

export const QuizDetails = (props: QuizDetailsProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getQuizDetailsData);
    const isLoading = useSelector(getQuizDetailsisLoading);

    useEffect(() => {
        dispatch(fetchQuizeById(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <PageLoader/>;
    }

    console.log(data);

    return (
        <div>
            {id}
        </div>
    );
};
