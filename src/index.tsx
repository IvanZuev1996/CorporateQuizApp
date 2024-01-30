import {ConfigProvider} from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import './app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 18,
                    fontFamily: '\'Montserrat\', sans-serif'
                }
            }}
        >
            <App />
        </ConfigProvider>
    </React.StrictMode>,
);
