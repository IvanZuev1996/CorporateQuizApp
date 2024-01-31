import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

interface AntdProviderProps {
    children: ReactNode;
}

export const AntdProvider = ({children}: AntdProviderProps) => (
    <ConfigProvider
        theme={{
            token: {
                fontSize: 18,
                fontFamily: '\'Montserrat\', sans-serif'
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