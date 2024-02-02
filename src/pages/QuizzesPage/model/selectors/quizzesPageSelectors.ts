import { StateSchema } from '@/app/providers/StoreProvider';

export const getQuizzesPageIsLoading = (state: StateSchema) => state.quizzesPage.isLoading;
export const getQuizzesPageError = (state: StateSchema) => state.quizzesPage.error;
export const getQuizzesPageInited = (state: StateSchema) => state.quizzesPage._inited;