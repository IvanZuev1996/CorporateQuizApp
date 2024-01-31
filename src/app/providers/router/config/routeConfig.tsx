import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { QuizPage } from '@/pages/QuizPage';
import {
    AppRoutes,
    getRouteQuiz,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
} from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRoutes.QUIZ]: {
        path: getRouteQuiz(':id'),
        element: <QuizPage />
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <NotFoundPage />
    },
    // last route
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />
    }
};
