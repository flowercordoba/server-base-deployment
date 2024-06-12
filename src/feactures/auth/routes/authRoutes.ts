/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { AuthService } from '../services/auth.service';
import { SignUp } from '../controllers/signup';
import { SignIn } from '../controllers/signin';
import { SignOut } from '../controllers/signout';
import { Password } from '../controllers/password';
import { TokenController } from '../controllers/refresh-token';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    // Crear instancia de AuthService sin EmailService
    const authService = new AuthService();
    
    const signUpController = new SignUp(authService);
    const signInController = new SignIn(authService);
    const tokenController = new TokenController(authService);
    const passwordController = new Password({} as any); // Ajusta el constructor según tus necesidades
    
    // Definir las rutas
    router.post('/signin', signInController.read);
    router.post('/signup', signUpController.create);
    router.post('/refresh-token', tokenController.refreshToken);
    router.post('/forgot-password', passwordController.create);
    router.post('/reset-password/:token', passwordController.update);
    router.get('/signout', (req, res) => {
      const signOutController = new SignOut();
      signOutController.update(req, res);
    });

    return router;
  }
}
