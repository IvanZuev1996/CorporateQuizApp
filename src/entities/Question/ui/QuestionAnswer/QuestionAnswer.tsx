
import { Mods, classNames } from '@/shared/lib/helpers/classNames';
import { HStack } from '@/shared/ui/Stack';

import cls from './QuestionAnswer.module.scss';

interface QuestionAnswerProps {
    id: string;
    text: string;
    onSelectedAnswer?: (id: number) => void;
    selectedAnswerId: number | null;
}

export const QuestionAnswer = (props: QuestionAnswerProps) => {
    const { id, text, onSelectedAnswer, selectedAnswerId } = props;

    const mods: Mods = {
        [cls.active]: selectedAnswerId === Number(id)
    };

    const handlerClick = () => {
        onSelectedAnswer?.(Number(id));
    };

    return (
        <HStack 
            onClick={handlerClick} 
            className={classNames(cls.answer, mods)}
        >
            {text}
        </HStack>
    );
};
