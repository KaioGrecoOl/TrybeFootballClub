import { NextFunction, Request, Response } from 'express';
import jwtToken from '../services/jwtToken';

const validateEmailandPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400)
      .json({ message: 'All fields must be filled' });
  }

  next();
};

const tokenValid = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'token not found' });
  }
  const { role } = await jwtToken.comparePassword(authorization);

  return res.status(200).json({ role });
  next();
};

export { validateEmailandPassword, tokenValid };
