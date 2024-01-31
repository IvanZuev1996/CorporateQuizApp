import { MainPage } from '@/pages/MainPage';
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
        element: <MainPage />
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <MainPage />
    },
    // last route
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <MainPage />
    }
};
