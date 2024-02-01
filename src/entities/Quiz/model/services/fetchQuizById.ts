import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Quiz } from '../types/quiz';

export const fetchQuizeById = createAsyncThunk<
    Quiz,
    string | undefined,
    ThunkConfig<string>
>('quizDetails/fetchQuizeById', async (quizId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        if (!quizId) {
            throw new Error('quizId is not find');
        }

        const response = await extra.api.get<Quiz>(
            `/quizzes/${quizId}`
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('fetchQuizeById is failed');
    }
});
