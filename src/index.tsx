import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { AntdProvider } from './app/providers/AntdProvider';

import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AntdProvider>
                <App />
            </AntdProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
