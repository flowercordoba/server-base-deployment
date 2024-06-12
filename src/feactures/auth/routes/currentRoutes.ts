

import express, { Router } from 'express';
import { CurrentUser } from '../controllers/current-user';
import { token } from '../controllers/refresh-token';

class CurrentUserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/currentuser', CurrentUser.prototype.read);
    this.router.get('/refresh-token/:email' , token);

    return this.router;
  }
}

export const currentUserRoutes: CurrentUserRoutes = new CurrentUserRoutes();
