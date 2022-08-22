import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Iuser } from '../interfaces/Ilogin';

dotenv.config();

export default class Token {
  static createToken(user: Iuser): string {
    const token = jwt.sign({ data: user }, 'secret', {
      expiresIn: '6d',
      algorithm: 'HS256',
    });
    return token;
  }
}
