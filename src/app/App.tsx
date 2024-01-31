import { useState } from 'react';

import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='app'>
            <Header/>
            <Sidebar/>
            <AppRouter/>
        </div>
    );
}

export default App;
