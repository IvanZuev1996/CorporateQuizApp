export interface Answer {
    id: string;
    text: string;
    isCorrect: boolean;
}

export interface QuizQuestion {
    id: string;
    title: string;
    answers: Answer[];
}

export interface Quiz {
    id: string;
    title: string;
    description?: string;
    img?: string;
    questions: QuizQuestion[];
}