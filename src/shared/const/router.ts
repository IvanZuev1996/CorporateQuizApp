export enum AppRoutes {
    MAIN = 'main',
    QUIZ = 'quiz',
    FORBIDDEN = 'forbidden',
    // last page
    NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteQuiz = (quizId: string) => `/quiz/${quizId}`;
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';