import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';

import { PageLayout } from '../../../Pagelayout';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <PageLayout>
        <HStack
            justify="center"
            align="center"
            className={classNames(cls.PageLoader, {}, [className])}
        >
            <Spin indicator={<LoadingOutlined spin />} size='large'/>
        </HStack>
    </PageLayout>
);
