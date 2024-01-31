import { PageLayout } from '@/widgets/Pagelayout';

const MainPage = () => { 
    console.log(import.meta.env.VITE_API_URL);

    return (
        <PageLayout>
            <h1>This is MainPage</h1>
        </PageLayout>
    );};

export default MainPage;