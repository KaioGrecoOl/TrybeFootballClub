import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import LoginService from '../services/loginServices';

dotenv.config();

export default class LoginController {
  static getLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await LoginService.getLogin({ email, password });
    if (result.message) {
      return res.status(result.status).json({ message: result.message });
    }
    return res.status(result.status).json({ token: result.token });
  };
}
