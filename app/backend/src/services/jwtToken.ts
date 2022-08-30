import * as jwt from 'jsonwebtoken';
import { Ilogin } from '../interfaces/Ilogin';

export default class Token {
  static createToken = (user: Ilogin) => {
    const token = jwt.sign({ data: user }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '6d',
      algorithm: 'HS256',
    });

    return token;
  };
  // Consegui desenvolver a função abaixo assistindo a aula do Calaça do dia 24.3- Node-js e JWT

  static comparePassword = async (token: string) => {
    try {
      const { data }: any = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      return data;
    } catch (err) {
      const e = new Error('Invalid token');
      e.name = 'UnauthorizedError';
      throw e;
    }
  };
}
