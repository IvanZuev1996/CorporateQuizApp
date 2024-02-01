import { PageLayout } from '@/widgets/Pagelayout';

const MainPage = () => { 
    console.log(import.meta.env.VITE_API_URL);

    return (
        <PageLayout>
            <p>This is MainPage</p>
        </PageLayout>
    );};

export default MainPage;