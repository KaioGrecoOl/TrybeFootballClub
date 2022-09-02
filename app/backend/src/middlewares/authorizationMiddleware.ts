import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
// import jwtToken from '../services/jwtToken';

const authorizations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'token not found' });
    const SECRET = process.env.JWT_SECRET || 'SECRET';
    const payload = verify(token, SECRET);
    if (!payload) {
      return next();
    }
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
export default authorizations;
