
import { memo } from 'react';

import { VStack } from '@/shared/ui/Stack';


interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = memo((props: PageLayoutProps) => {
    const {children} = props;

    return (
        <VStack max className='page-content'>
            {children}
        </VStack>
    );
});