import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

const authorizations = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) return res.status(401).json({ message: 'token not found' });
    const SECRET = process.env.JWT_SECRET || 'SECRET';
    const payload = verify(token, SECRET);
    console.log(payload);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
export default authorizations;
