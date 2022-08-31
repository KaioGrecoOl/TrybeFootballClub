import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const authorizations = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'token not found' });
    const SECRET = process.env.JWT_SECRET || 'SECRET';
    verify(token, SECRET);
    if (!token) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  } catch (err) {
    return err;
  }
};

export default authorizations;
