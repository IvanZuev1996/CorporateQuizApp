import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <Spin indicator={<LoadingOutlined spin />} size='large' className={className}/>
);