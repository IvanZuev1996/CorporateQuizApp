import {
    createEntityAdapter,
    createSlice
} from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Quiz } from '@/entities/Quiz';

import { fetchQuizList } from '../services/fetchQuizList';
import { QuizzesPageSchema } from '../types/quizzesPageSchema';



const quizzesAdapter = createEntityAdapter<Quiz, string>({
    // получение id (для того, чтобы antity adapter понимал по какому полю будет идти нормализация)
    selectId: (quiz) => quiz.id
});

export const getQuizzes = quizzesAdapter.getSelectors<StateSchema>(
    (state) => state.quizzesPage || quizzesAdapter.getInitialState()
);

const quizzesPageSlice = createSlice({
    name: 'quizzesPageSlice',
    initialState: quizzesAdapter.getInitialState<QuizzesPageSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: []
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuizList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchQuizList.fulfilled, (state, action) => {
                state.isLoading = false;
                state._inited = true;
                quizzesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchQuizList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { reducer: quizzesPageReducer } = quizzesPageSlice;
export const { actions: quizzesPageActions } = quizzesPageSlice;
