import { RouteConfig } from 'react-router-config';
import { Welcome } from '../containers/Welcome';
import { SpringPlayground } from '../containers/SpringPlayground';

export const routes: RouteConfig[] = [
  // --- Welcome ---
  {
    path: '/',
    component: Welcome,
    exact: true,
  },
  {
    path: '/spring-playground',
    component: SpringPlayground,
  },
];
