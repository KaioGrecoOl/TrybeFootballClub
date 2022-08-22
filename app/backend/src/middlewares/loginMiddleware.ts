import { NextFunction, Request, Response } from 'express';

const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email || email === undefined) {
    return res.status(400)
      .json({ message: 'All fields must be filled' });
  }

  next();
};

const validatePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400)
      .json({ message: 'All fields must be filled' });
  }
  next();
};

export { validateEmail, validatePassword };
