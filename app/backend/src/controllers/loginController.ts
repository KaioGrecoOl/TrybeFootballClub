import { Request, Response } from 'express';
import authServ from '../services/authServ';

export default class LoginController {
  static getLogin = async (req: Request, res: Response) => {
    const { email, password } = await authServ.validateBody(req.body);
    const token = await authServ.validateCredentials({ email, password });
    res.status(200).json({ token });
  };
}
