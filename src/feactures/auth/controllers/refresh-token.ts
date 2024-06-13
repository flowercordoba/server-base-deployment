/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { CustomError } from '@globals/helpers/custom.error';

export class TokenController {
  constructor(public readonly authService: AuthService) {}

  private handleError = (error: unknown, res: Response): Response => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  };

  public refreshToken = async (req: Request, res: Response): Promise<Response> => {
    console.log('name', req.body);
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'name is required' });
    }

    try {
      const user = await this.authService.getUserByUsername(name);
      if (!user) {
        throw CustomError.notFound('User not found');
      }

      const newToken = await this.authService.signToken({ id: user.id });
      return res.status(200).json({ token: newToken });
    } catch (error) {
      return this.handleError(error, res);
    }
  };
}

// Función de middleware para manejar el token
export async function token(req: Request, res: Response): Promise<void> {
  const authService = new AuthService(); // Crear instancia de AuthService sin EmailService
  const tokenController = new TokenController(authService);
  await tokenController.refreshToken(req, res);
}
