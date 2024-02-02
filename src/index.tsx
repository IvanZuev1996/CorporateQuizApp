import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { AntdProvider } from './app/providers/AntdProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';

import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <AntdProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </AntdProvider>
        </StoreProvider>
    </BrowserRouter>
);
