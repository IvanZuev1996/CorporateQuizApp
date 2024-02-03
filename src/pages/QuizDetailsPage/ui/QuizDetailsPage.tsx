import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { QuizDetails } from '@/entities/Quiz';
import { PageLayout } from '@/widgets/Pagelayout';

const QuizDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();

            return event.returnValue;
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    
    return (
        <PageLayout>
            <QuizDetails id={id}/>
        </PageLayout>
    );
};

export default QuizDetailsPage;
