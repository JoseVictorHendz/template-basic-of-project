import { Router } from 'express';
import UserRoutes from './user.routes';
import SessionRoutes from './sessions.routes';

const routes = Router();

routes.use('/users', UserRoutes);
routes.use('/sessions', SessionRoutes);

export default routes;
