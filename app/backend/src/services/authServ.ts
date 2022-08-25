import * as Joi from 'joi';
import passwordServ from './passwordServ';
import { Ilogin } from '../interfaces/Ilogin';
import jwtToken from './jwtToken';
import Users from '../database/models/users';

// Consegui desenvolver a função abaixo assistindo a aula do Calaça do dia 24.3- Node-js e JWT

export default class Author {
  static validateBody = (params: string) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error, value } = schema.validate(params);

    if (error) throw error;

    return value;
  };

  static validateCredentials = async ({ email, password }: Ilogin) => {
    const user: any = await Users.findOne({ where: { email } });

    if (!user) {
      return 'undefined';
    }

    passwordServ.checkPassword(password, user.password);

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = jwtToken.createToken(userWithoutPassword);

    return token;
  };

  static validateToken = (token: string) => {
    if (!token) {
      const e = new Error('Incorrect token');
      e.name = 'UnauthorizedError';
      throw e;
    }

    const user = jwtToken.comparePassword(token);

    return user;
  };
}
