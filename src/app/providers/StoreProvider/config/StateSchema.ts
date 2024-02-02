import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { QuizDetailsSchema } from '@/entities/Quiz';
import { QuizzesPageSchema } from '@/pages/QuizzesPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { CounterSchema } from '@/widgets/CounterComponent';

export interface StateSchema {
    counter: CounterSchema;
    quizDetails: QuizDetailsSchema;
    quizzesPage: QuizzesPageSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // асинхронные редюсеры
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
