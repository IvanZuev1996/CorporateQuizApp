import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Quiz } from '@/entities/Quiz';

export const fetchQuizList = createAsyncThunk<
    Quiz[],
    void,
    ThunkConfig<string>
>('quizzesPage/fetchQuizList', async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    try {
        const response = await extra.api.get<Quiz[]>('/quizzes');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('fetchQuizList is failed');
    }
});
