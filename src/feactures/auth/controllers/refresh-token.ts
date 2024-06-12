/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT from 'jsonwebtoken';
import { config } from '@root/config';

function signToken(userId: string, email: string, firstName: string): void {

}

export async function token(req: Request, res: Response): Promise<void> {
  res.send('token');
}
