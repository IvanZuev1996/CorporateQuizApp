import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { QuizDetailsPage} from '@/pages/QuizDetailsPage';
import { QuizzesPage } from '@/pages/QuizzesPage';
import {
    AppRoutes,
    getRouteQuizDetails,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteQuizzes,
} from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRoutes.QUIZZES]: {
        path: getRouteQuizzes(),
        element: <QuizzesPage />
    },
    [AppRoutes.QUIZ_DETAILS]: {
        path: getRouteQuizDetails(':id'),
        element: <QuizDetailsPage />
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
