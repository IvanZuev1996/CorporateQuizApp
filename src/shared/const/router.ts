export enum AppRoutes {
    MAIN = 'main',
    QUIZZES = 'quizzes',
    QUIZ_DETAILS = 'quiz_details',
    FORBIDDEN = 'forbidden',
    // last page
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteQuizzes = () => '/quizzes';
export const getRouteQuizDetails = (quizId: string) => `/quiz/${quizId}`;
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';