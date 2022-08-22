import { Ilogin } from '../interfaces/Ilogin';
import Users from '../database/models/users';
import Token from '../helpers/jwtToken';

export default class LoginService implements Ilogin {
  email: string;
  password: string;

  static getLogin = async (value: Ilogin) => {
    const { email, password } = value;
    const searchUser = await Users.findOne({ where: { email } });
    if (!searchUser || searchUser.password !== password) {
      return { status: 400, message: 'Invalid' };
    }
    const token = Token.createToken(searchUser);
    return { status: 200, token };
  };
}
