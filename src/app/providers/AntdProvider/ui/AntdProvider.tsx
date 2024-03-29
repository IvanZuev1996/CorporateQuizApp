import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

interface AntdProviderProps {
    children: ReactNode;
}

export const AntdProvider = ({children}: AntdProviderProps) => (
    <ConfigProvider
        theme={{
            token: {
                fontSize: 14,
                fontFamily: '\'Montserrat\', sans-serif',
                colorPrimary: '#3f57ff'
            },
            components: {
                Layout: {
                    headerPadding: 30,  
                },
            }
        }}
    >
        {children}
    </ConfigProvider>
);