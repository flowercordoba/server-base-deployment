import { Request, Response } from 'express';

export class Password {
  public async create(req: Request, res: Response): Promise<void> {
    res.send(' Password create');
  }

  public async update(req: Request, res: Response): Promise<void> {
    res.send(' Password update');

  }
}
