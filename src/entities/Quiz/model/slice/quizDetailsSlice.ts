import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchQuizeById } from '../services/fetchQuizById';
import { Quiz } from '../types/quiz';
import { QuizDetailsSchema } from '../types/quizDetailsSchema';

const initialState: QuizDetailsSchema = {};

export const quizDetaisSlice = createSlice({
    name: 'quiz_detais',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuizeById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchQuizeById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(
                fetchQuizeById.fulfilled,
                (state, { payload }: PayloadAction<Quiz>) => {
                    state.isLoading = false;
                    state.error = undefined;
                    state.data = payload;
                }
            );
    }
});

export const { actions: quizDetaisActions } = quizDetaisSlice;
export const { reducer: quizDetaisReducer } = quizDetaisSlice;
