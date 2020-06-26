import { RouteConfig } from 'react-router-config';
import { Welcome } from '../containers/Welcome';

export const routes: RouteConfig[] = [
  // --- Account ---
  {
    path: '/',
    component: Welcome,
  },
];
