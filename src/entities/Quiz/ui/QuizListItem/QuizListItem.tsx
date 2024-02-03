import { Button } from 'antd';

import { getRouteQuizDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/helpers/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { PageContent } from '@/shared/ui/PageContent';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './QuizListItem.module.scss';

interface QuizListItemProps {
    quizId: string;
    title?: string;
    description?: string;
    img?: string;
    className?: string;
}

export const QuizListItem = (props: QuizListItemProps) => {
    const { className, title, description, img, quizId } = props;

    return (
        <PageContent
            className={classNames(cls.Item, {}, [className])}
        >
            <VStack gap='8' max className={cls.itemContent}>
                <HStack className={cls.imageWrap} max>
                    <img 
                        src={img || 'https://doal.ru/sites/default/files/1587214958_111.png'} 
                        alt="bussines" 
                        className={cls.image}
                    />
                </HStack>
                <VStack className={cls.info}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </VStack>
                <AppLink to={getRouteQuizDetails(quizId)} className={cls.btn}>
                    <Button 
                        className={cls.btn}
                    >
                        Пройти опрос
                    </Button>
                </AppLink>
            </VStack>
        </PageContent>
    );
};
