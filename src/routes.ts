import { Application } from 'express';
import { AuthRoutes } from './feactures/auth/routes/authRoutes';
import { currentUserRoutes } from './feactures/auth/routes/currentRoutes';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, AuthRoutes.routes);

    app.use(BASE_PATH, currentUserRoutes.routes());
  };
  routes();
};
