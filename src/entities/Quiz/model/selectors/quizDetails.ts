import { StateSchema } from '@/app/providers/StoreProvider';

export const getQuizDetailsData = (state: StateSchema) => state.quizDetails.data;
export const getQuizDetailsisLoading = (state: StateSchema) => state.quizDetails.isLoading;
export const getQuizDetailsError = (state: StateSchema) => state.quizDetails.error;