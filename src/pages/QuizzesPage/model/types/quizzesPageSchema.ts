import { EntityState } from '@reduxjs/toolkit';

import { Quiz } from '@/entities/Quiz';

export interface QuizzesPageSchema extends EntityState<Quiz, string> {
    isLoading?: boolean;
    error?: string;
    _inited?: boolean;
}