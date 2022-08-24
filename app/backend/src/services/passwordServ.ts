import * as bcrypt from 'bcryptjs';

// Consegui desenvolver a função abaixo assistindo a aula do Calaça do dia 24.3- Node-js e JWT

export default class PasswordServ {
  static encryptPasswor(password: string) {
    const salt = bcrypt.genSaltSync(5);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
  }

  static checkPassword(password: string, passwordChek: string) {
    const isMatch = bcrypt.compareSync(password, passwordChek);
    if (!isMatch) {
      const e = new Error('Invalid password');
      e.name = 'UnauthorizedError';
      throw e;
    }
  }
}
