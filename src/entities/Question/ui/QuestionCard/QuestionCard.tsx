import { Button } from 'antd';
import { useCallback, useState } from 'react';

import { HStack, VStack } from '@/shared/ui/Stack';

import { Answer, Question } from '../../model/types/question';
import { QuestionAnswer } from '../QuestionAnswer/QuestionAnswer';

import cls from './QuestionCard.module.scss';

interface QuestionCardProps {
    question?: Question;
    isLastQuestion?: boolean;
    onSendAnswer?: (selectedAnswer: Answer) => void;
}

export const QuestionCard = ({ question, onSendAnswer, isLastQuestion }: QuestionCardProps) => {
    const answers = question?.answers;

    const firstPart = answers?.slice(0, 2);
    const secondPart = answers?.slice(2);

    const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);

    const onSelectedAnswer = useCallback((id: number) => {
        setSelectedAnswerId(id);
    }, []);

    const onSendAnswerHandler = useCallback(() => {
        setSelectedAnswerId(null);
        const selectedAnswer = answers?.find(answer => answer.id === `${selectedAnswerId}`);

        if (!selectedAnswer) {
            return;
        }

        onSendAnswer?.(selectedAnswer);
    }, [answers, onSendAnswer, selectedAnswerId]);

    if (!answers || !firstPart || !secondPart) {
        return <div>No Data!</div>;
    }
    
    return (
        <VStack className={cls.Card} gap='12' align='center' max>
            <h1>{question.title}</h1>
            <p>Какая-то подсказка...</p>
            <VStack gap='12' max className={cls.answers}>
                <HStack gap='12' max>
                    {firstPart.map((answer) => (
                        <QuestionAnswer 
                            id={answer.id} 
                            text={answer.text}
                            onSelectedAnswer={onSelectedAnswer}
                            selectedAnswerId={selectedAnswerId}
                            key={answer.id}
                        />
                    ))}
                </HStack>
                <HStack gap='12' max>
                    {secondPart.map((answer) => (
                        <QuestionAnswer 
                            id={answer.id} 
                            text={answer.text}
                            onSelectedAnswer={onSelectedAnswer}
                            selectedAnswerId={selectedAnswerId}
                            key={answer.id}
                        />
                    ))}
                </HStack>
                <Button 
                    type='primary' 
                    disabled={!selectedAnswerId}
                    onClick={onSendAnswerHandler}
                    className={cls.nextBtn}
                >
                    {
                        isLastQuestion ? 'Завершить тест' : 'Ответить'
                    }
                </Button>
            </VStack>
        </VStack>
    );
};