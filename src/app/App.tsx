import { useState } from 'react';

import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';


export function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='app'>
            <Header/>
            <Sidebar/>
            <AppRouter/>
        </div>
    );
}
