import { Question } from '@/entities/Question';

export interface Quiz {
    id: string;
    title: string;
    description?: string;
    img?: string;
    questions: Question[];
}