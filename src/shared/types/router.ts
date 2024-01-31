/* eslint-disable babun4ek-fsd-plugin/layer-imports-checker */
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};
