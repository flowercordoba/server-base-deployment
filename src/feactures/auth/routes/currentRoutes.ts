import express, { Router } from 'express';
import { CurrentUser } from '../controllers/current-user';
import { token } from '../controllers/refresh-token';
import { AuthMiddleware } from '@globals/helpers/auth-middleware';
import { CurrentUserService } from '../services/current-user.service';

class CurrentUserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    const currentUserController = new CurrentUser(new CurrentUserService());
    
    this.router.get('/currentuser', AuthMiddleware.validateJWT, currentUserController.read);
    this.router.post('/refresh-token', AuthMiddleware.validateJWT, token);

    return this.router;
  }
}

export const currentUserRoutes: CurrentUserRoutes = new CurrentUserRoutes();
