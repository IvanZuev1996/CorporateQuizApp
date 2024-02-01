import { useParams } from 'react-router-dom';

import { QuizDetails } from '@/entities/Quiz';
import { PageLayout } from '@/widgets/Pagelayout';

const QuizDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <PageLayout>
            <h1>This is QuizPage</h1>
            <QuizDetails id={id}/>
        </PageLayout>
    );
};

export default QuizDetailsPage;
