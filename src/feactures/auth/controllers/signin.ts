import { Request, Response } from 'express';

export class SignIn {
  public async read(req: Request, res: Response): Promise<void> {
    res.send('read user');
}
}