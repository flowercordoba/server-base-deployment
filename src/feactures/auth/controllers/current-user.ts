/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';


export class CurrentUser {
  public async read(req: Request, res: Response): Promise<void> {
  
    res.send('CurrentUser read');

   

  }

}
