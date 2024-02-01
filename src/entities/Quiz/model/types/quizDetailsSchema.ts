import { Quiz } from './quiz';

export interface QuizDetailsSchema {
    isLoading?: boolean;
    error?: string;
    data?: Quiz;
}